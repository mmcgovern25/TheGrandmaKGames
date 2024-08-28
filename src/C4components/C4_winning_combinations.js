export const C4_WINNING_COMBINATIONS = [
  // Horizontal
  // Row 0
[
  [
    { row: 0, column: 0 },
    { row: 0, column: 1 },
    { row: 0, column: 2 },
    { row: 0, column: 3 },
  ],
  [
    { row: 0, column: 1 },
    { row: 0, column: 2 },
    { row: 0, column: 3 },
    { row: 0, column: 4 },
  ],
  [
    { row: 0, column: 2 },
    { row: 0, column: 3 },
    { row: 0, column: 4 },
    { row: 0, column: 5 },
  ],
  [
    { row: 0, column: 3 },
    { row: 0, column: 4 },
    { row: 0, column: 5 },
    { row: 0, column: 6 },
  ],

  // Row 1 (you would repeat the same pattern for each row)
  [
    { row: 1, column: 0 },
    { row: 1, column: 1 },
    { row: 1, column: 2 },
    { row: 1, column: 3 },
  ],
  // Continue similarly for the rest of the rows...


  // Vertical
  // Column 0

  [
    { row: 0, column: 0 },
    { row: 1, column: 0 },
    { row: 2, column: 0 },
    { row: 3, column: 0 },
  ],
  [
    { row: 1, column: 0 },
    { row: 2, column: 0 },
    { row: 3, column: 0 },
    { row: 4, column: 0 },
  ],
  [
    { row: 2, column: 0 },
    { row: 3, column: 0 },
    { row: 4, column: 0 },
    { row: 5, column: 0 },
  ],

  // Column 1 (repeat for each column)
  [
    { row: 0, column: 1 },
    { row: 1, column: 1 },
    { row: 2, column: 1 },
    { row: 3, column: 1 },
  ],
  // Continue similarly for the rest of the columns...


    // Diagonal Bottom-Left to Top-Right
    [
      { row: 0, column: 0 },
      { row: 1, column: 1 },
      { row: 2, column: 2 },
      { row: 3, column: 3 },
    ],
    [
      { row: 0, column: 1 },
      { row: 1, column: 2 },
      { row: 2, column: 3 },
      { row: 3, column: 4 },
    ],
    [
      { row: 0, column: 2 },
      { row: 1, column: 3 },
      { row: 2, column: 4 },
      { row: 3, column: 5 },
    ],
    [
      { row: 0, column: 3 },
      { row: 1, column: 4 },
      { row: 2, column: 5 },
      { row: 3, column: 6 },
    ],

    // Diagonal Bottom-Left to Top-Right starting from Row 1
    [
      { row: 1, column: 0 },
      { row: 2, column: 1 },
      { row: 3, column: 2 },
      { row: 4, column: 3 },
    ],
    // Continue similarly for the rest of the diagonals...


      // Diagonal Top-Left to Bottom-Right
  [
    { row: 3, column: 0 },
    { row: 2, column: 1 },
    { row: 1, column: 2 },
    { row: 0, column: 3 },
  ],
  [
    { row: 4, column: 0 },
    { row: 3, column: 1 },
    { row: 2, column: 2 },
    { row: 1, column: 3 },
  ],
  [
    { row: 5, column: 0 },
    { row: 4, column: 1 },
    { row: 3, column: 2 },
    { row: 2, column: 3 },
  ],
  [
    { row: 3, column: 1 },
    { row: 2, column: 2 },
    { row: 1, column: 3 },
    { row: 0, column: 4 },
  ],
  // Continue similarly for the rest of the diagonals...
  ]
]
