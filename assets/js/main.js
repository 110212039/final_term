/*
	Industrious by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/
(function($) {

	var	$window = $(window),
		$banner = $('#banner'),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			default:   ['1681px',   null       ],
			xlarge:    ['1281px',   '1680px'   ],
			large:     ['981px',    '1280px'   ],
			medium:    ['737px',    '980px'    ],
			small:     ['481px',    '736px'    ],
			xsmall:    ['361px',    '480px'    ],
			xxsmall:   [null,       '360px'    ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Menu.
		$('#menu')
			.append('<a href="#menu" class="close"></a>')
			.appendTo($body)
			.panel({
				target: $body,
				visibleClass: 'is-menu-visible',
				delay: 500,
				hideOnClick: true,
				hideOnSwipe: true,
				resetScroll: true,
				resetForms: true,
				side: 'right'
			});

})(jQuery);


if (navigator.geolocation) {
  // HTML5 定位抓取
  navigator.geolocation.getCurrentPosition(function (position) {
    mapServiceProvider(position.coords.latitude, position.coords.longitude);
  },
  function(error) {
    switch (error.code) {
      case error.TIMEOUT:
        alert('連線逾時');
        break;

      case error.POSITION_UNAVAILABLE:
        alert('無法取得定位');
        break;

      case error.PERMISSION_DENIED: // 拒絕
        alert('想要參加本活動，\n記得允許手機的GPS定位功能喔!');
        break;

      case error.UNKNOWN_ERROR:
        alert('不明的錯誤，請稍候再試');
        break;
    }
  });
} else { // 不支援 HTML5 定位
  // 若支援 Google Gears
  if (window.google && google.gears) {
    try {
      // 嘗試以 Gears 取得定位
      var geo = google.gears.factory.create('beta.geolocation');
      geo.getCurrentPosition(successCallback, errorCallback, { enableHighAccuracy: true, gearsRequestAddress: true });
    } catch (e) {
      alert('定位失敗請稍候再試');
    }
  } else {
    alert('想要參加本活動，\n記得允許手機的GPS定位功能喔!');
  }
}

// 取得 Gears 定位發生錯誤
function errorCallback(err) {
  var msg = 'Error retrieving your location: ' + err.message;
  alert(msg);
}

// 成功取得 Gears 定位
function successCallback(p) {
  mapServiceProvider(p.latitude, p.longitude);
}

// 顯示經緯度
function mapServiceProvider(latitude, longitude) {
  alert('經緯度：' + latitude + ', ' + longitude);
}
