// 라우트 어플리케이션 생성
var app = Sammy(function () {
  console.log('sammy working');
  //------------------페이지
  
  // 관리자 로그인페이지
  this.get("#/login", function () { pageTransition(`${PAGE_PATH}login.html`); });  

  //기본
  this.get("#/amin", function () { pageTransition(`${PAGE_PATH}admin.html`); });
  
  //메인
  this.get("#/admin", function () { pageTransition(`${PAGE_PATH}admin.html`); });

  // 번역관리 => 번역사 관리 상세페이지
  this.get("#/detail", function(){pageTransition(`${PAGE_PATH}admin_detail.html`);})
  
  // 회원관리 성세페이지
  this.get("#/detail/companysub", function(){pageTransition(`${PAGE_PATH}company_sub_detail.html`);})

  // 블로그관리 상세페이지
  this.get("#/detail/blogsub", function(){pageTransition(`${PAGE_PATH}blog_detail.html`);})  

  //블로그관리 수정페이지
 this.get("#/detail/blogcorrect", function(){pageTransition(`${PAGE_PATH}blog_correct.html`);})   

  //배너 관리페이지
  this.get("#/detail/banner", function(){pageTransition(`${PAGE_PATH}banner_detail.html`);})   

  //배너 수정페이지
  this.get("#/detail/banner/modify", function(){pageTransition(`${PAGE_PATH}banner_modify.html`);})

  // FnQ 상세보기
  this.get("#/detail/FnQ", function(){pageTransition(`${PAGE_PATH}FnQ.html`);})

  // 공지사항 상세보기
  this.get("#/detail/notice", function(){pageTransition(`${PAGE_PATH}notice.html`);})

  // 1 : 1 문의
  this.get("#/detail/onetone", function(){pageTransition(`${PAGE_PATH}one_to_one.html`);})

  // 오류관리신고 상세보기
  this.get("#/detail/erroreporting", function(){pageTransition(`${PAGE_PATH}error_reporting.html`);})

  // 약관관리 상세보기
  this.get("#/detail/terms", function(){pageTransition(`${PAGE_PATH}terms.html`);})


  //404
  this.notFound = function (verb, path) { $("#PAGE_VIEW").html("404, 페이지 못찾음"); };
});




//어플리케이션 시작
$(function () {
  app.run();
}); 

