let num=61 ;
if(num%3==0){
  if(num%5==0){
    console.log('3と5の倍数です');
  }
    else{
      console.log('3の倍数です');
    }
}
  else if(num%5==0){
    console.log('5の倍数です');
  }
  else{
    console.log('「' + num +'」' + 'は3と5の倍数ではありません');
  }