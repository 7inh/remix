class LunarCalendar {
  lunarMonths: number[];
  LUNAR_MONTHS: string[];
  LUNAR_ANIMALS: string[];

  constructor() {
    this.lunarMonths = [
      0x04bd8, 0x04ae0, 0x0a570, 0x054d5, 0x0d260, 0x0d950, 0x16554, 0x056a0,
      0x09ad0, 0x055d2, 0x04ae0, 0x0a5b6, 0x0a4d0, 0x0d250, 0x1d255, 0x0b540,
      0x0d6a0, 0x0ada2, 0x095b0, 0x14977, 0x04970, 0x0a4b0, 0x0b4b5, 0x06a50,
      0x06d40, 0x1ab54, 0x02b60, 0x09570, 0x052f2, 0x04970, 0x06566, 0x0d4a0,
      0x0ea50, 0x06e95, 0x05ad0, 0x02b60, 0x186e3, 0x092e0, 0x1c8d7, 0x0c950,
      0x0d4a0, 0x1d8a6, 0x0b550, 0x056a0, 0x1a5b4, 0x025d0, 0x092d0, 0x0d2b2,
      0x0a950, 0x0b557, 0x06ca0, 0x0b550, 0x15355, 0x04da0, 0x0a5d0, 0x14573,
      0x052d0, 0x0a9a8, 0x0e950, 0x06aa0, 0x0aea6, 0x0ab50, 0x04b60, 0x0aae4,
      0x0a570, 0x05260, 0x0f263, 0x0d950, 0x05b57, 0x056a0, 0x096d0, 0x04dd5,
      0x04ad0, 0x0a4d0, 0x0d4d4, 0x0d250, 0x0d558, 0x0b540, 0x0b6a0, 0x195a6,
      0x095b0, 0x049b0, 0x0a974, 0x0a4b0, 0x0b27a, 0x06a50, 0x06d40, 0x0af46,
      0x0ab60, 0x09570, 0x04af5, 0x04970, 0x064b0, 0x074a3, 0x0ea50, 0x06b58,
      0x055c0, 0x0ab60, 0x096d5, 0x092e0, 0x0c960, 0x0d954, 0x0d4a0, 0x0da50,
      0x07552, 0x056a0, 0x0abb7, 0x025d0, 0x092d0, 0x0cab5, 0x0a950, 0x0b4a0,
      0x0baa4, 0x0ad50, 0x055d9, 0x04ba0, 0x0a5b0, 0x15176, 0x052b0, 0x0a930,
      0x07954, 0x06aa0, 0x0ad50, 0x05b52, 0x04b60, 0x0a6e6, 0x0a4e0, 0x0d260,
      0x0ea65, 0x0d530, 0x05aa0, 0x076a3, 0x096d0, 0x04bd7, 0x04ad0, 0x0a4d0,
      0x1d0b6, 0x0d250, 0x0d520, 0x0dd45, 0x0b5a0, 0x056d0, 0x055b2, 0x049b0,
      0x0a577, 0x0a4b0, 0x0aa50, 0x1b255, 0x06d20, 0x0ada0,
    ];

    this.LUNAR_MONTHS = [
      "Giáp",
      "Ất",
      "Bính",
      "Đinh",
      "Mậu",
      "Kỷ",
      "Canh",
      "Tân",
      "Nhâm",
      "Quý",
    ];
    this.LUNAR_ANIMALS = [
      "Tý",
      "Sửu",
      "Dần",
      "Mão",
      "Thìn",
      "Tỵ",
      "Ngọ",
      "Mùi",
      "Thân",
      "Dậu",
      "Tuất",
      "Hợi",
    ];
  }

  getLunarYearDays(year: number): number {
    let sum: number = 348;
    for (let i: number = 0x8000; i > 0x8; i >>= 1) {
      sum += this.lunarMonths[year - 1900] & i ? 1 : 0;
    }
    return sum + this.getLeapMonthDays(year);
  }

  getLeapMonth(year: number): number {
    return this.lunarMonths[year - 1900] & 0xf;
  }

  getLeapMonthDays(year: number): number {
    if (this.getLeapMonth(year)) {
      return this.lunarMonths[year - 1900] & 0x10000 ? 30 : 29;
    }
    return 0;
  }

  getMonthDays(year: number, month: number): number {
    return this.lunarMonths[year - 1900] & (0x10000 >> month) ? 30 : 29;
  }

  getLunarYearName(lunarYear: number): string {
    const canIndex: number = (lunarYear - 4) % 10;
    const chiIndex: number = (lunarYear - 4) % 12;
    return `${this.LUNAR_MONTHS[canIndex]} ${this.LUNAR_ANIMALS[chiIndex]}`;
  }

  toLunarDay(day: number, month: number, year: number): string {
    let offset: number =
      (new Date(year, month - 1, day).getTime() -
        new Date(1900, 0, 31).getTime()) /
      86400000;
    let temp: number = 0;
    let lunarYear: number, lunarMonth: number;
    for (lunarYear = 1900; lunarYear < 2050 && offset > 0; lunarYear++) {
      temp = this.getLunarYearDays(lunarYear);
      offset -= temp;
    }
    if (offset < 0) {
      offset += temp;
      lunarYear--;
    }

    const leap: number = this.getLeapMonth(lunarYear);
    let isLeap: boolean = false;

    for (lunarMonth = 1; lunarMonth < 13 && offset > 0; lunarMonth++) {
      if (leap > 0 && lunarMonth == leap + 1 && !isLeap) {
        --lunarMonth;
        isLeap = true;
        temp = this.getLeapMonthDays(lunarYear);
      } else {
        temp = this.getMonthDays(lunarYear, lunarMonth);
      }
      if (isLeap && lunarMonth == leap + 1) {
        isLeap = false;
      }
      offset -= temp;
    }

    if (offset == 0 && leap > 0 && lunarMonth == leap + 1) {
      if (isLeap) {
        isLeap = false;
      } else {
        isLeap = true;
        --lunarMonth;
      }
    }

    if (offset < 0) {
      offset += temp;
      --lunarMonth;
    }

    const lunarDay = offset + 1;

    const lunarYearName: string = this.getLunarYearName(lunarYear);

    return `${Math.floor(
      lunarDay
    )}/${lunarMonth}/${lunarYear}:::(${lunarYearName}) ${
      isLeap ? "(Nhuận)" : ""
    }`;
  }
}

export const lunarCalendar: LunarCalendar = new LunarCalendar();
