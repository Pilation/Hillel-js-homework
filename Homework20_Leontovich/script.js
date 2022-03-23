const astrologicalSigns = {
    Aries: {
        startDate: {
            month: `March`,
            day: 21
        },
        endDate: {
            month: `April`,
            day: 20
        }
    },
    Taurus: {
        startDate: {
            month: `April`,
            day: 21
        },
        endDate: {
            month: `May`,
            day: 21
        }
    },
    Gemini: {
        startDate: {
            month: `May`,
            day: 22
        },
        endDate: {
            month: `June`,
            day: 21
        }
    },
    Cancer: {
        startDate: {
            month: `June`,
            day: 22
        },
        endDate: {
            month: `July`,
            day: 22
        }
    },
    Leo: {
        startDate: {
            month: `July`,
            day: 23
        },
        endDate: {
            month: `August`,
            day: 21
        }
    },
    Virgo: {
        startDate: {
            month: `August`,
            day: 22
        },
        endDate: {
            month: `September`,
            day: 23
        }
    },
    Libra: {
        startDate: {
            month: `September`,
            day: 24
        },
        endDate: {
            month: `October`,
            day: 23
        }
    },
    Scorpio: {
        startDate: {
            month: `October`,
            day: 24
        },
        endDate: {
            month: `November`,
            day: 22
        }
    },
    Sagittarius: {
        startDate: {
            month: `November`,
            day: 23
        },
        endDate: {
            month: `December`,
            day: 22
        }
    },
    Capricorn: {
        startDate: {
            month: `December`,
            day: 23
        },
        endDate: {
            month: `January`,
            day: 20
        }
    },
    Aquarius: {
        startDate: {
            month: `January`,
            day: 21
        },
        endDate: {
            month: `February`,
            day: 19
        }
    },
    Pisces: {
        startDate: {
            month: `February`,
            day: 20
        },
        endDate: {
            month: `March`,
            day: 20
        }
    }
};

const users = [
    {
        name: 'Larry Page',
        dayOfBirth: 26,
        monthOfBirth: `March`
    },
    {
        name: 'Bill Gates',
        dayOfBirth: 28,
        monthOfBirth: `October`
    },
    {
        name: 'Mark Zuckerberg',
        dayOfBirth: 14,
        monthOfBirth: `May`
    }
]

class Time {
    static date() {
        return new Date();
    }
    static day() {
        let today = new Date()
        return today.getDate();
    }

    static month = function () {
        let today = new Date()
        return today.getMonth();
    }

    static monthNames = function () {
        return [`January`, `February`, `March`, `April`, `May`, `June`, `July`, `August`, `September`, `October`, `November`, `December`];
    }

    static monthName = function (month) {
        return !month ? this.monthNames()[this.month()] : this.monthNames()[month];
    }
}

class Astrological extends Time {
    static astrologicalSign(SignDay, SignMonth) {
        const findSign = (day, month) => {
            let Sign = false;
            for (let key in astrologicalSigns) {
                if (month === astrologicalSigns[key].startDate.month || month === astrologicalSigns[key].endDate.month) {
                    if (day >= astrologicalSigns[key].startDate.day || day <= astrologicalSigns[key].endDate.day) {
                        Sign = key;
                        break;
                    }
                }
            }
            return Sign;
        };
        let Sign = findSign(SignDay, SignMonth);
        return Sign ? Sign : findSign(Astrological.day(), Astrological.monthName());
    }
}

class Human extends Astrological {
    constructor(user) {
        super()
        for (let key in user) {
            this[key] = user[key];
        }
    }
    AstrologicalSign() {
        return `${this.name} is ${Human.astrologicalSign(this.dayOfBirth, this.monthOfBirth)}`
    }
}


let LarryPage = new Human(users[0]);
let BillGates = new Human(users[1]);
let MarkZuckerberg = new Human(users[2]);

let Humans = users.map(item => new Human(item));
console.log(Humans[0].AstrologicalSign());

// ForFun
console.log(LarryPage.AstrologicalSign());
console.log(BillGates.AstrologicalSign());
console.log(MarkZuckerberg.AstrologicalSign());