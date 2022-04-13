// CHapter 21-25

// question1
// firstName=prompt("Enter first name")
// lastName=prompt("Enter last name")
// alert("Hello "+firstName+lastName)

// question2
// mobile=prompt("Enter your favourite mobile")
// alert(mobile.length)

// question3
// country="Pakistan"
// alert(country.indexOf("n"))

// question4
// str="Hello World"
// alert(str.lastIndexOf("l"))

// question5
// country="Pakistan"
// alert(country[3])

// question6
// firstName=prompt("Enter first name")
// lastName=prompt("Enter last name")
// alert("Hello "+firstName.concat(lastName))

// question7
// city="Hyderabad"
// newCity=city.replace("Hyder","Islam")
// console.log(newCity)

// quesstion8
// var message="Ali and Sami are best friends. They play cricket and football together."
// alert(message.replaceAll("and","&"))

// question9
// var value="472"
// console.log(typeof(value))
// value=parseInt(value)
// console.log(typeof(value))

// question10
// var user=prompt("Enter any word")
// alert(user.toUpperCase())

// question11
// var user=prompt("Enter any word")
// user1=user.charAt(0).toUpperCase()+user.slice(1)
// alert(user1)

// question12
// var num=35.36
// var str=num.toString().replace(".","")
// console.log(str)

// question13
// var userName=prompt("Enter user name")
// for (var i=0;i<userName.length;i++){
//     if(userName[i].charCodeAt()==33 ||userName[i].charCodeAt()== 44 ||userName[i].charCodeAt()== 46 ||userName[i].charCodeAt()== 64){
//         alert("Invalid User Name")
//         break
//     }
// }

// question14
// A = ["cake", "apple pie", "cookie", "chips", "patties"]
// item=prompt("what do you want to add").toLowerCase()
// itemCheck=0
// for (var i=0;i<A.length;i++){
//     if (A[i]==item){
//         itemCheck=1
//         console.log(A[i]+" is availible at index "+i)
//         break
//     }
// }
// if(itemCheck==0){
//     console.log("not found")
// }

// question15
// var password=prompt("Enter your password")
// a="enter valid password"
// specialCheck=0
// for (var i=0;i<password.length;i++){
//     if(password[i].charCodeAt()>=58 && password[i].charCodeAt()<=64)
//     specialCheck=1
// }
// ucharacteCheck=0
// for (var i=0;i<password.length;i++){
//     if(password[i].charCodeAt()>=65 && password[i].charCodeAt()<=90)
//     ucharacteCheck=1
// }
// lcharacteCheck=0
// for (var i=0;i<password.length;i++){
//     if(password[i].charCodeAt()>=97 && password[i].charCodeAt()<=122)
//     lcharacteCheck=1
// }
// numberCheck=0
// for (var i=0;i<password.length;i++){
//     if(password[i].charCodeAt()>=48 && password[i].charCodeAt()<=57)
//     numberCheck=1
// }
// if (password.length<=6){
//     alert(a)
// }
// else if(password[0].charCodeAt>=48 && password[0].charCodeAt<=57){
//     alert(a)
// }
// else if(specialCheck==1){
//     alert(a)
// }
// else if(lcharacteCheck==0 && ucharacteCheck==0 ){
//     alert(a)
// }
// else if(numberCheck==0){
//     alert(a)
// }
// else{
//     alert("correct password")
// }

// question16
// var university = "University of Karachi";
// for (var i=0;i<university.length;i++){
//     console.log(university[i])
// }

// question17
// userInput=prompt("enter user name")
// alert(userInput[userInput.length-1])

// question18
// var string="the quick brown fox jumps over the lazy dog"
// count=0
// var strList=string.split(" ")
// for (var i=0;i<string.length;i++){
//     console.log(strList[i])
//     if (strList[i]=="the"){
//         count+=1
//     }
// }
// alert(count)