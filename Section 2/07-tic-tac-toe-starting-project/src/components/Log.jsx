export default function Log({ turns }) {
  return (
    <ol id="log">
      {/* 1. Gọi hàm .map() để duyệt mảng */}
      {turns.map((turn) => (
        // 2. Tạo Key độc nhất bằng Template Literals (Dấu Backtick)
        // Ví dụ: Nếu row=0, col=1 => Key sẽ là chuỗi "01"
        <li key={`${turn.square.row}${turn.square.col}`}>
          {turn.player} selected {turn.square.row},{turn.square.col}
        </li>
      ))}
    </ol>
  );
}
