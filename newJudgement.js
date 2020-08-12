let points = [60,60,80,60,0,100,60];
let number = points.length;
let judge = "合格";

  function get_achievement(points){
    let sum = 0;
    for(let i=0; i<number; i++){
        sum = sum + points[i];
    }
      if (sum >= number * 80 ){
        return"A"
      }
      else if (sum >= number * 60 ){
        return"B"
      }
      else if (sum >= number * 40 ){
        return"C"
      }
      else{
        return"D"
      }
  };

  function get_pass_or_failure(points){
    for(let i=0; i<number; i++){
      if(points[i] < 60){
        judge = "不合格";
        break;
      }
    }
    return judge
  };

  function judgement(points){
    let achievement = get_achievement(points);
    let pass_or_failure =  get_pass_or_failure(points);
      return `あなたの成績は${achievement}です。${pass_or_failure}です！`
  }

console.log (judgement(points))
