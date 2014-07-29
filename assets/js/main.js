$(document).ready(function(){
		// 用來顯示大圖片用
		var $showImage = $("#container"),lock;
		var $btn = $('.btn');
		// 當滑鼠移到 .abgne-block-20120106 中的某一個超連結時
		$btn.mouseover(function(){
			// 把 #show-image 的 src 改成被移到的超連結的位置
			//$showImage.attr('src', $(this).attr('href'));
			var $this = $(this),_src;
			$btn.css("opacity",".4");
			switch($this.attr("class")){

				case "btn e-btn":
				    _src = "url(assets/image/enews01.png)";
				    $this.css("opacity","1");
				break;

				case "btn i-btn":
				    _src = "url(assets/image/cute01.png)";
				    $this.css("opacity","1");
				break;				

				case "btn t-btn":
				    _src = "url(assets/image/tnt1.png)";
				    $this.css("opacity","1");
				break;

				case "btn h-btn":
				    _src = "url(assets/image/harriod01.png)";
				    $this.css("opacity","1");
				break;

				case "btn m-btn":
				    _src = "url(assets/image/moluei.png)";
				    $this.css("opacity","1");
				break;

			}

			if($this.attr("class") != lock){
				//$showImage.removeClass('content');
				$showImage.stop(false, true).fadeTo(300, .7).css("background-image",_src).stop(false, true).fadeTo(900, 1);
			    lock = $this.attr("class");
			}
		}).click(function(){
			// 如果超連結被點擊時, 取消連結動作
			return false;
		});
	});

 $(document).ready(function(){ 
 	$(window).resize(function(){ 
 		$("#container").css('height', $(window).height()); 
 	}); 
 });