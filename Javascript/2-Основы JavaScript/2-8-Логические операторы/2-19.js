// Что выведет код ниже?
//----------------------------------------------------------//

"use strict";

alert( alert(1) || 2 || alert(3) );
// ответ: сначала сработает alert(1), потом логическое выражение вернет 2