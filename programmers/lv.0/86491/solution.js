//First try
function solution(sizes){
  let maxWidth = 0;
  let maxHeight = 0;
  
  for(let len of sizes) {
    if(len[0] > len[1]){ // 가로가 더 긴 경우
      if(maxWidth < len[0]) maxWidth = len[0];
      if(maxHeight < len[1]) maxHeight = len[1];
    }
    else { // 세로가 더 긴 경우
      if(maxWidth < len[1]) maxWidth = len[1];
      if(maxHeight < len[0]) maxHeight = len[0];
    }
  };
  return maxWidth * maxHeight;
}