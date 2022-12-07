/**
 * submit 버튼 눌렀을 때 비어있으면 넘어가지 않도록
 * 아이디비번 없을 때 로그인 페이지에 남도록
 
 * jquery 쓸 때는 onsubmit을 여기서 쓰면 됨.
 */
var id_empty = "아이디를 입력하세요.";
var pw_empty = "비밀번호를 입력하세요.";

var pw_error = "설정한 비밀번호와 다릅니다.";
var name_empty = "이름을 입력하세요";
var email_empty = "이메일 주소를 입력하세요";
var email_error = "@를 제거해 주세요.";
//var tel_error="첫번째 칸을 입력하세요.";
var confirmerror = "아이디 중복확인을 해 주세요.";

//ready의 매개변수로 func을 쓰고 있음.
//error는 F12에서 error 찾아야 함.
$(document).ready(
	function(){
		//메인 로그인
		$("form[name='mainform']").on(
			"submit",
			function(event){
				if(!$("input[name='id']").val()){
					alert(id_empty);
					$("input[name='id']").focus();
					return false;
				}else if(!$("input[name='passwd']").val()){
					alert(pw_empty);
					$("input[name='passwd']").focus();
					return false;
				}
			}
		);
		//회원 가입
		$(".new_member").on(
			"submit",
			function(event){
				if(!$("#new_id").val()){
					alert(id_empty);
					$("#new_id").focus();
					return false;
				}//자바스크립트 정규표현식으로 검사할 것!
				else if(!$("#new_pw").val()){
					alert(pw_empty);
					$("#new_pw").focus();
					return false;
				}else if($("#new_pw").val()!=$("#re_pw").val()){
					alert(pw_error);
					$("#new_pw").focus();
					return false;
				}else if(!$("#new_name").val()){
					alert(name_empty);
					$("#new_name").focus();
					return false;
				}else if(!$("#new_email1").val()){
					alert(email_empty);
					$("#new_email1").focus();
					return false;
				}
				//전화번호 파트가 전부 비거나 다 채워져 있거나
				/*
				
				*/
				if($("#confirm_value").val()=="0"){
					alert(confirmerror);
					$("#new_id").focus();
					return false;
				}
			}
		);
		//버튼 누르고 새창 뜨는 것.
		$("#double_id_check").on(
			"click",
			function(event){
				if(!$("#new_id").val()){
					alert(id_empty);
					$("#new_id").focus();
					return false;
				}//자바스크립트 정규표현식으로 검사할 것!
				else{
					url = "confirm?id="+$("#new_id").val();
					open(url, "confirm", "toolbar=no, menubar=no, scrollbar=no, status=no, width=500, height=300");
				}
			}
		);
		
		//아이디 중복 확인 결과 페이지 jQuery
		$("#b_confirm").on(
			"click",
			function(event){
				my_id = $("span").text();
				//alert(my_id);   //aaa불가
				$("#new_id", opener.document.inputform).val(my_id);
				$("#confirm_value", opener.document.inputform).val("1");
				//$("input[name='id']", opener).val(id);
				window.close();
			}
		);
		
		$("#confirmform").on(
			"submit",
			function(event){
				if (! $('#new_id').val()){
					alert(id_empty);
					$("#new_id").focus();
					return false;
				}
			}
		);	
		
		//회원탈퇴
		$("#passwdform").on(
			"submit",
			function(event){
				if(! $('#checkPW').val()){
					alert(pw_empty);
					$("#checkPW").focus();
					return false;
				}
			}
		);
		
		//회원정보수정
		$("#updateform").on(
			"submit",
			function(event){
				if(! $('#updatePW').val()){
					alert(pw_empty);
					$("#updatePW").focus();
					return false;
				}
			}
		);
		
		//회원정보수정 form -  비밀번호&이메일 빈칸 확인
		$("#modifyform").on(
			"submit",
			function(event){
				if(!$("#passwd").val()){
					alert(pw_empty);
					$("#passwd").focus();
					return false;
				}else if($('#passwd').val()!=$("#repasswd").val()){
					alert(pw_error);
					$("#passwd").focus();
					return false;
				}else if(!$("#new_email1").val() || !$("#new_email2").val()){
					alert(email_empty);
					$("#new_email1").focus();
					return false;
				}
				
				if($("#new_email1").val() && $("#new_email2").val()){
					if($("#new_email1").val().indexOf('@') != -1
					|| $("#new_email2").val().indexOf('@') != -1){
						alert(email_error);
						$("#new_email1").focus();
						return false;
					}
				}
			}
		);
	}
	
);

//아이디 중복 확인 결과 페이지 jQuery
/*
function setid(id){
	opener.document.inputform.id.value=id;
	self.close(); //window.close() 도 가능
	
}
*/

/*
function maincheck(){
	//if(! window.document.mainform.id.value)
	if(! mainform.id.value){
		alert(id_empty);
		mainform.id.focus();
		return false;
	}else if(! mainform.passwd.value){
		alert(pw_empty);
		mainform.passwd.focus();
		return false;
	}
}  ->이경우에는 main에 onsubmit="return maincheck()" 이 form 태그 안에 들어있음.

function maincheck(){
	if($('#tbID').val()==""){
		alert(id_empty);
		$('#tbID').focus();
		return false;
	}else if($('#tbPW').val()==""){
		alert(pw_empty);
		$("tbPW").focus();
		return false;
	}
}

*/
