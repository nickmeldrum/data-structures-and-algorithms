function validString(a) {
  const charMap = new Map()

  for (let i = 0; i < a.length; i += 1) {
    const current = charMap.get(a[i])
    const newFrequency = (current === undefined) ? 1 : current + 1
    charMap.set(a[i], newFrequency)
  }

  const mapArray = Array.from(charMap.values())
  const baseFreq = mapArray[0]

  let oneOff = 0
  let aSingleChar = false
  for (let i = 1; i < mapArray.length; i += 1) {
    if (mapArray[i] === baseFreq) {
      continue;
    }
    if (mapArray[i] === baseFreq + 1 || mapArray[i] === baseFreq - 1) {
      if (oneOff >= 1) {
        return 'NO'
      }
      oneOff += 1;
      continue;
    }
    if (mapArray[i] === 1 && (baseFreq !== 1 || baseFreq !== 0)) {
      if (aSingleChar) {
        return 'NO'
      }
      aSingleChar = true
      continue
    }

    return 'NO'
  }

  return 'YES'
}

console.log(validString(
  'aabbbbcc'),
  'NO')

console.log(validString(
  'ibfdgaeadiaefgbhbdghhhbgdfgeiccbiehhfcggchgghadhdhagfbahhddgghbdehidbibaeaagaeeigffcebfbaieggabcfbiiedcabfihchdfabifahcbhagccbdfifhghcadfiadeeaheeddddiecaicbgigccageicehfdhdgafaddhffadigfhhcaedcedecafeacbdacgfgfeeibgaiffdehigebhhehiaahfidibccdcdagifgaihacihadecgifihbebffebdfbchbgigeccahgihbcbcaggebaaafgfedbfgagfediddghdgbgehhhifhgcedechahidcbchebheihaadbbbiaiccededchdagfhccfdefigfibifabeiaccghcegfbcghaefifbachebaacbhbfgfddeceababbacgffbagidebeadfihaefefegbghgddbbgddeehgfbhafbccidebgehifafgbghafacgfdccgifdcbbbidfifhdaibgigebigaedeaaiadegfefbhacgddhchgcbgcaeaieiegiffchbgbebgbehbbfcebciiagacaiechdigbgbghefcahgbhfibhedaeeiffebdiabcifgccdefabccdghehfibfiifdaicfedagahhdcbhbicdgibgcedieihcichadgchgbdcdagaihebbabhibcihicadgadfcihdheefbhffiageddhgahaidfdhhdbgciiaciegchiiebfbcbhaeagccfhbfhaddagnfieihghfbaggiffbbfbecgaiiidccdceadbbdfgigibgcgchafccdchgifdeieicbaididhfcfdedbhaadedfageigfdehgcdaecaebebebfcieaecfagfdieaefdiedbcadchabhebgehiidfcgahcdhcdhgchhiiheffiifeegcfdgbdeffhgeghdfhbfbifgidcafbfcd'),
  'YES')

console.log(validString(
  'abcdefghhgfedecba'),
  'YES')

console.log(validString(
  'aabbcd'),
  'NO')

console.log(validString(
  'aabbcc'),
  'YES')

console.log(validString(
  'aabbbcc'),
  'YES')


console.log(validString(
  'aaab'),
  'YES')
