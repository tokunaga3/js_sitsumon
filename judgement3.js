function get_achievement(x,y,z){
  let sum = x + y + z;
  // ↑ｘ、ｙ、ｚの合計をsumに定義付け
  if(sum >= 250){
    // ↑sumが250以上だったら
  return "A";
  // Aを返す
}
}
console.log(get_achievement(60,200,40));
// ｘ、ｙ、ｚに入れる数字


function get_pass_or_failure(x,y,z){
  if(
    x >= 60 &&
    y >= 60 &&
    z >= 60)
    // ↑すべて60以上
  {
    return"合格"}
// 条件にあったら合格
    else{
    return"不合格"
    }
    // 条件に合わなかったら不合格
}
console.log(get_pass_or_failure(60,200,40));


function judgement(x,y,z){
  let achievement = get_achievement(x,y,z);
  let pass_or_failure = get_pass_or_failure(x,y,z);
  return "あなたの成績は'${achievement}'です。${pass_or_failure}です！"
};
console.log(judgement(60,50,200));
