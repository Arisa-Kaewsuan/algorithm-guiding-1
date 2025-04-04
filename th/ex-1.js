const moveZeroes = function (nums) {
  // Two Pointers Technique

  // Step 1 : Declare Pointer ตัวแรกจะชี้ไปที่ตำแหน่งที่เราจะใส่ค่าที่ไม่ใช่ศูนย์
  let left = 0;

  // Step 2 : Pointer ตัวที่สองจะใช้ในการวนลูปผ่านอาร์เรย์ทั้งหมด เราจะทำการสลับค่าระหว่าง Pointer ทั้งสองตัวเมื่อพบค่าที่ไม่ใช่ศูนย์
  // เมื่อ Pointer ตัวแรกเจอค่าที่ไม่ใช่ศูนย์ เราจะทำการสลับค่าระหว่าง Pointer ทั้งสองตัว
  // และขยับ Pointer ตัวแรกไปข้างหน้า
  // ในที่สุดเราจะได้อาร์เรย์ที่มีค่าที่ไม่ใช่ศูนย์อยู่ด้านหน้า และค่าศูนย์อยู่ด้านหลัง
  for (let right = 0; right < nums.length; right++) {
    if (nums[right] !== 0) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++; 
    }
  }

  return nums;
};

// Time Complexity: O(n) -- เพราะเราต้องวนลูปผ่านสตริงทั้งหมด ถ้ามี n ตัวอักษร ก็จะต้องใช้เวลา O(n) แต่ลดจำนวนรอบที่ต้องเขียนค่าลง ถทำให้เร็วกว่าแบบข้างล่าง ทั้งๆที่ O(n) เท่ากัน

// const moveZeroes = function (nums) {
//   // Two Pointer

//   // Step 1: Declare ตัวแปร lastNonZeroFoundAt เพื่อเก็บตำแหน่งของตัวเลขที่ไม่เป็นศูนย์
//   let lastNonZeroFoundAt = 0; 

//   // Step 2: วนลูปเพื่อเช็คอาร์เรย์ nums ถ้าเจอเลขที่ไม่เป็นศูนย์ให้ย้ายไปตำแหน่ง lastNonZeroFoundAt
//   // และอัพเดท lastNonZeroFoundAt ให้เป็นตำแหน่งถัดไป ถ้าเจอเลขที่เป็นศูนย์ให้ข้ามไป
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== 0) {
//       nums[lastNonZeroFoundAt] = nums[i]; 
//       lastNonZeroFoundAt++; 
//     }
//   }
  
//   // Step 3: เติมเลขศูนย์ที่ตำแหน่งที่เหลือในอาร์เรย์ nums โดยเริ่มจาก lastNonZeroFoundAt จนถึงความยาวของ nums
//   for (let i = lastNonZeroFoundAt; i < nums.length; i++) {
//     nums[i] = 0; // Fill with zeros
//   }
//   return nums;
// };

const result1 = moveZeroes([0, 1, 0, 3, 12]);
console.log(result1); // [1,3,12,0,0]

const result2 = moveZeroes([0]);
console.log(result2); // [0]

