
function checknumber()
{
	//Checks if the Zipcode entered is numeric
Zipcode=document.getElementById("zipcode").value;
if(isNaN(Zipcode))
{
alert("Please Enter Numbers Only");
}
}

function displayHello()
{
	var FirstNameValue = document.getElementById("Fname").value;
	var LastNameValue = document.getElementById("Lname").value;
	var AddressValue = document.getElementById("Street Address").value;
	var CityValue = document.getElementById("city").value;
	var StateValue = document.getElementById("state").value;
	var ZipValue = document.getElementById("zipcode").value;
	var MessageValue = document.getElementById("message").value;
	var firstl=FirstNameValue.length;
	var lastl=LastNameValue.length;
	var S=" ";
	var condition=0;
	var d = new Date();
	//Returns a date as a string value
	var DS = d.toLocaleDateString();
	//Returns the time portion of date
	var TS=d.toLocaleTimeString();
	var td1 = document.getElementById("firstname");
	//Checks if the firstname is greater than 1 character and less than 20
	if (firstl<=1 || firstl>=20)
	{
		S+="Please enter valid first name. The length should be greater than 1 and less than 20\n";
				
	}
	//Checks if the lastname is greater than or equal to 3 characters and less than 20
    if (lastl<3 || lastl>=20)
	{
		S+="Please enter valid last name. The length should be greater than 3 and less than 20\n";
	}
if (StateValue!=2)
	{
		S+="State should contain only two char\n";
	}
	//Checks if the address is empty and gives the message if satisfied
	if (AddressValue=="")
	{
		S+="Please enter street address\n";
	}
	if (CityValue=="")
	{
		S+="Please enter city\n";
	}
	if (StateValue=="")
	{
		S+="Please enter valid State\n";
	}
	if (ZipValue=="")
	{
		S+="Please enter Zip code\n";
	}
	if (MessageValue=="")
	{
		S+="MPlease enter message\n";
	}
	if( S!=" ")
	{
	alert(S);
	condition=1;
	}
	//Checks if the condition is zero and displays the message if satisfied
	if(condition==0)
	var x=confirm("Are you sure you want to submit the form?");
	if(x==true)
	{
	alert("Thank you! Your details are successfully saved"+"\n"+DS+" "+TS);
	document.InformationForm.submit();
	}
       
	
}
	