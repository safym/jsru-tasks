// Что выведет этот код?
//
// <script>
//   let body = document.body;
//
//   body.innerHTML = "<!--" + body.tagName + "-->";
//
//   alert( body.firstChild.data ); // что выведет?
// </script>
//----------------------------------------------------------//

let body = document.body;

body.innerHTML = "<!--" + body.tagName + "-->";


alert( body.firstChild.data ); 
// BODY  (tagName указывается в верхнем регистре)
// в самом элементе body будет единственнй узел-комментарий <!--BODY--> 

