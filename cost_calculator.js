// 2泊3日旅行費用計算プログラム（草津温泉入浴追加版）
function 旅行費用計算_2泊3日_草津温泉() {
  // 基本情報
  const 人数 = 3; // 大人3人
  const 宿泊数 = a2; // 2泊

  // 交通費
  const 総走行距離km = 1100; // 往復合計の推定距離
  const ガソリン代_1km = 20; // 1kmあたりの燃料代（円）
  const 高速道路料金_往復 = 30000; // 往復の高速料金

  // 宿泊費
  const コートヤード白馬_1泊 = 30000; // 1泊あたりの料金
  const 軽井沢マリオット_1泊 = 35000; // 1泊あたりの料金
  const ペット追加料金 = 5000; // 1泊あたりのペット料金

  // 食事・観光費
  const 食事代_1人1日 = 6000; // 犬同伴可能なレストランは若干高め
  const 観光費_合計 = 12000; // 入場料や体験費用の合計
  const 犬関連費用 = 5000; // ドッグランや犬用メニューなど
  
  // 温泉入浴費
  const 温泉入浴料 = 800 * 人数; // 人数分の入浴料

  // 計算
  const ガソリン代 = 総走行距離km * ガソリン代_1km;
  const 宿泊費 = コートヤード白馬_1泊 + 軽井沢マリオット_1泊 + (ペット追加料金 * 2);
  const 食事代 = 食事代_1人1日 * 人数 * 3; // 3日分

  // 合計
  const 総費用 = ガソリン代 + 高速道路料金_往復 + 宿泊費 + 食事代 + 観光費_合計 + 犬関連費用 + 温泉入浴料;

  // 結果表示
  console.log("【2泊3日旅行費用見積もり（草津温泉入浴込み）】");
  console.log(`ガソリン代: ${ガソリン代.toLocaleString()}円`);
  console.log(`高速道路料金: ${高速道路料金_往復.toLocaleString()}円`);
  console.log(`宿泊費: ${宿泊費.toLocaleString()}円`);
  console.log(`食事代: ${食事代.toLocaleString()}円`);
  console.log(`観光費: ${観光費_合計.toLocaleString()}円`);
  console.log(`犬関連費用: ${犬関連費用.toLocaleString()}円`);
  console.log(`温泉入浴料: ${温泉入浴料.toLocaleString()}円`);
  console.log(`合計費用: ${総費用.toLocaleString()}円`);
  
  return 総費用;
}

// 関数実行
旅行費用計算_2泊3日_草津温泉();