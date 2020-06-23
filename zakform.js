function surligne(champ, erreur)
{
   if(erreur)
      champ.style.backgroundColor = "#fba";
   else
      champ.style.backgroundColor = "white";
}
function verifNom(champ){
	var regex = /^[A-Za-z]+$/;
	if( champ.value.length>10 || !champ.value.match(regex) ){
		surligne(champ,true);
		return false;
	}else
	{
		surligne(champ,false);
		return true ;
	}
	
	
}
function verifMail(champ){
	
	var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if(  !champ.value.match(regex) ){
		surligne(champ,true);
		return false;
	}else
	{
		surligne(champ,false);
		return true;
	}
	
}
function verifNum(champ){
	var regex = /^[0-9]+$/;
	if(  !champ.value.match(regex)  || parseInt(champ.value)<1 || parseInt(champ.value)>200){
		surligne(champ,true);
		return false;
	}else
	{
		surligne(champ,false);
		return true;
	}
	
}
function verifAge(champ){
	var regex = /^[0-9]+$/;
	if(  !champ.value.match(regex)  || parseInt(champ.value)<18 || parseInt(champ.value)>75){
		surligne(champ,true);
		return false;
	}else
	{
		surligne(champ,false);
		return true;
	}
	
}
function verifCp(champ){
	var regex = /^[0-9]+$/;
	if(  !champ.value.match(regex)  || parseInt(champ.value)<10000 || parseInt(champ.value)>99999){
		surligne(champ,true);
		return false;
	}else
	{
		surligne(champ,false);
		return true;
	}
	
}
function verifForm(f){
	
	var nomOk=verifNom(f.nom);
	var prenomOk=verifNom(f.prenom);
	var ageOk=verifAge(f.age);
	var mailOk=verifMail(f.email);
	var numRueOk=verifNum(f.numrue);
	var rueOk=verifNom(f.rue);
	var cpOk=verifCp(f.cp);
	
	
   if(nomOk && mailOk && ageOk && prenomOk && numRueOk && rueOk && cpOk)
   {
      return true;
   }
   else
   {
      alert("Veuillez remplir correctement tous les champs");
      return false;
   }
	
	
}