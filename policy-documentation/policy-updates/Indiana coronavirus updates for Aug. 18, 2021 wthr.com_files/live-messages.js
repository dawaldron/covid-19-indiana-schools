define('live-messages', ['module', 'utils', 'signalr', 'page'], function(mod, utils, signalR, page) {
	
	const module = {
		'name': mod.id,
		'class': '.' + mod.id
	};
	
	utils.broadcast(module.name, 'loaded');
	
	var broadcast = function(message, data) {
		utils.broadcast(module.name, message, data);
	};
    var isConnected = false;
    const siteId = document.getElementsByClassName('page')[0].dataset.siteId;
	var connection = new signalR.HubConnectionBuilder()
        .withUrl('/tgnaMessage')
        .withAutomaticReconnect()
		.configureLogging(signalR.LogLevel.Information)
		.build();
	connection.start().then(function() {
		broadcast('connected');
		isConnected = true;
		addToGroup(siteId);
        addToGroup(siteId + '-weatheralerts');
		addToGroup(siteId + '-closings');
	}).catch(function(error) {
		broadcast('connectionFailed', {
			'error': error
		});
	});
	
    connection.on('TegnaOne-BreakingContentStart', function (message) {
        message = JSON.parse(message);
		broadcast('receivedBreakingContentStart', {
			'message': message
		});
        broadcast('breakingStoryStarted', {
            'id': message.id,
            'title': message.metadata.title,
            'url': message.metadata.url.desktopUrl,
            'type': 'breakingNews'
        });
    });

    connection.on('TegnaOne-BreakingContentStop', function (message) {
        message = JSON.parse(message);
		broadcast('receivedBreakingContentStop', {
			'message': message
		});
        broadcast('breakingStoryStopped', {
            'id': message.id
        });
	});

	connection.on('TegnaOne-LiveVideoStart', function (message) {
		message = JSON.parse(message);
		broadcast('liveVideoStarted', {
			'message': message
		});
	});

	connection.on('TegnaOne-LiveVideoStop', function (message) {
		message = JSON.parse(message);
		broadcast('liveVideoStopped', {
			'message': message
		});
	});

	connection.on('TegnaOne-WeatherAlerts', function (message) {
		message = JSON.parse(message);
		broadcast('receivedWeatherAlerts', {
			'message': message
		});
		if (parseInt(message['count']) > 0) {
			broadcast('weatherAlertsUpdated', {
				'message': message
			});
		} else {
			broadcast('weatherAlertsRemoved', {
				'message': message
			});
		}
	});

	connection.on('TegnaOne-Closings', function (message) {
		message = JSON.parse(message);
		broadcast('receivedClosings', {
			'message': message
		});
		if (parseInt(message['count']) > 0) {
			broadcast('closingsUpdated', {
				'message': message
			});
		} else {
			broadcast('closingsRemoved', {
				'message': message
			});
		}
	});

	function addToGroup(groupName) {
		connection.invoke("AddToGroup", groupName)
			.catch(err => void 0);
		broadcast('addedGroup', {
			'groupName': groupName
		});
	}
	
	function removeFromGroup(groupName) {
		connection.invoke("RemoveFromGroup", groupName)
			.catch(err => void 0);
		broadcast('removedGroup', {
			'groupName': groupName
		});
	}
	
	return {
		connection: connection,
		isConnected: isConnected,
		addToGroup: addToGroup,
		removeFromGroup: removeFromGroup
	};
});
