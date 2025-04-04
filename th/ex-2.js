const romanToInt = function (s) {
  //Start coding here

  // Step 1 : Declare ตัวแปร romanNumerals เพื่อเก็บค่าของตัวเลขโรมัน
  const romanNumerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000};

  // Step 2 : สร้างตัวแปร total เพื่อเก็บผลรวมของค่าตัวเลขโรมัน
  let total = 0;

  // Step 3 : สร้างตัวแปร prevValue เพื่อเก็บค่าของตัวเลขโรมันก่อนหน้า โดยให้เริ่มต้นเป็น 0
  let prevValue = 0; 

  // Step 4 : เอา s (String) มาวนลูปเพื่อแปลงค่าตัวเลขโรมันเป็นจำนวนเต็ม โดยเริ่มจากตัวสุดท้ายไปหาตัวแรก
  for (let i = s.length - 1; i >= 0; i--) {
    const currentValue = romanNumerals[s[i]];
    if (currentValue < prevValue) {
      total -= currentValue; // Step 5 : เช็คว่าค่าตัวเลขโรมันที่ได้จาก romanNumerals[s[i]] น้อยกว่าค่าตัวเลขโรมันก่อนหน้าไหม ถ้าน้อยให้ลบออกจาก total ถ้าไม่ให้บวกเข้าไปใน total
    } else {
      total += currentValue; // Step 5.1 : ถ้าไม่ให้บวกเข้าไปใน total
    }
    prevValue = currentValue; // Step 6 : อัพเดท prevValue ให้เป็นค่าของ currentValue เพื่อใช้ในการเปรียบเทียบในรอบถัดไป
  }
  return total; 
};

// Time Complexity: O(n) -- เพราะเราต้องวนลูปผ่านสตริงทั้งหมด ถ้ามี n ตัวอักษร ก็จะต้องใช้เวลา O(n)

const result1 = romanToInt("III"); // 3
console.log(result1);

const result2 = romanToInt("LVIII"); // 58
console.log(result2);

const result3 = romanToInt("MCMXCIV"); //1994
console.log(result3);
