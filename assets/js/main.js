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
				    _src = "url(assets/image/index/enews.png)";
				    $this.css("opacity","1");
				break;

				case "btn i-btn":
				    _src = "url(assets/image/index/iti.png)";
				    $this.css("opacity","1");
				break;				

				case "btn t-btn":
				    _src = "url(assets/image/index/tnt.png)";
				    $this.css("opacity","1");
				break;

				case "btn h-btn":
				    _src = "url(assets/image/index/harriod.png)";
				    $this.css("opacity","1");
				break;

				case "btn m-btn":
				    _src = "url(assets/image/index/moluei.png)";
				    $this.css("opacity","1");
				break;

			}

			if($this.attr("class") != lock){
				//$showImage.removeClass('content');
				$showImage.stop(false, true).fadeTo('slow', .5);
				$showImage.stop(false,true).css("background-image",_src).fadeTo('slow', 1);
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