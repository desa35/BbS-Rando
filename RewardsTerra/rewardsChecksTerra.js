export const rewardsChecksTerra = [
  // Checks for original Single Rewards
  "if ReadShort(0x206D6C) == 0xF04 and ReadShort(0x206D74) == 0x1 then\n",
  "if ReadShort(0x206D6C) == 0x904 and ReadShort(0x206D74) == 0x2 then\n",
  "if ReadShort(0x206D6C) == 0x606 and ReadShort(0x206D74) == 0x36 then\n",
  "if ReadShort(0x206D6C) == 0xD0B and ReadShort(0x206D74) == 0x36 then\n",
  "if ReadShort(0x206D6C) == 0xD0B and ReadShort(0x206D74) == 0x4 then\n",
  "if ReadShort(0x206D6C) == 0x20A and ReadShort(0x206D74) == 0x33 then\n",
  "if ReadShort(0x206D6C) == 0x10D and ReadShort(0x206D74) == 0x37 then\n",

  // Checks for original Single Duplicate Rewards
  "if ReadShort(0x206D6C) == 0x402 and ReadShort(0x206D74) == 0x3 then\n",
  "if ReadShort(0x206D6C) == 0x602 and ReadShort(0x206D74) == 0x1 then\n",

  // Checks for original Double Rewards
  "if ReadShort(0x206D6C) == 0x101 and ReadShort(0x206D74) == 0x40 then\n",
  "if ReadShort(0x206D6C) == 0xB06 and ReadShort(0x206D74) == 0x37 then\n",
  "if ReadShort(0x206D6C) == 0x408 and ReadShort(0x206D74) == 0x3E then\n",
  "if ReadShort(0x206D6C) == 0x609 and ReadShort(0x206D74) == 0x2 then\n",
  "if ReadShort(0x206D6C) == 0x801 and ReadShort(0x206D74) == 0x1 then\n",

  // Checks for original Double Duplicate Rewards
  "if ReadShort(0x206D6C) == 0xA03 and ReadShort(0x206D74) == 0x1 then\n",
  "if ReadShort(0x206D6C) == 0xA03 and ReadShort(0x206D74) == 0x2 then\n",
];
