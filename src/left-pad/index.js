module.exports = function(str, len, ch = '.'){
  if(str.length >= len)
    return str;

  var repeat = '';
  for(let i = 0; i < len - str.length; i++)
    repeat += ch;

  return repeat + str;
};
