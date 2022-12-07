/**
 * submit 버튼 눌렀을 때 비어있으면 넘어가지 않도록
 * 아이디비번 없을 때 로그인 페이지에 남도록
 
 * jquery 쓸 때는 onsubmit을 여기서 쓰면 됨.
 */

var writererror = "작성자 입력";
var subjecterror = "글제목 입력";
var contenterror = "내용 입력";
var passwderror = "비밀번호 입력";
var passwdcheck = "비밀번호가 다름";

$(document).ready(
	function(){
		
		//글쓰기
		$("#inputform").on(
			"submit",
			function(event){
				if(!$("#writer").val()){
					alert(writererror);
					$("#writer").focus();
					return false;
				}else if(!$("#subject").val()){
					alert(subjecterror);
					$("#subject").focus();
					return false;
				}else if(!$("#content").val()){
					alert(contenterror);
					$("#content").focus();
					return false;
				}else if(!$("#passwd").val()){
					alert(passwderror);
					$("#passwd").focus();
					return false;
				}
			}
		);
		
		//비밀번호 확인
		$("#passwdform").on(
			"submit",
			function(event){
				if(!$("#passwd").val()){
					alert(passwderror);
					$("#passwd").focus();
					return false;
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
