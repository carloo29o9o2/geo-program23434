// ქუესთების ბაზა
const questsData = {
    hacker: [
        {
            title: "ქუესთი 1/10: სერვერის IP სკანირება",
            desc: "ჩაწერეთ ბრძანება სერვერის დასასკანირებლად: <code>scan -ip 192.168.1.100</code>",
            answer: "scan -ip 192.168.1.100",
            placeholder: "შეიყვანეთ ბრძანება..."
        },
        {
            title: "ქუესთი 2/10: Firewall პორტის გატეხვა",
            desc: "გამოითვალეთ პორტის ნომერი: 8080 + 404 =",
            answer: "8484",
            placeholder: "შეიყვანეთ პორტი..."
        },
        {
            title: "ქუესთი 3/10: ადმინისტრატორის პაროლის დეკოდირება",
            desc: "გაშიფრეთ Base64 კოდი <code>YWRtaW4xMjM=</code> (მინიშნება: admin...)",
            answer: "admin123",
            placeholder: "შეიყვანეთ გაშიფრული პაროლი..."
        },
        {
            title: "ქუესთი 4/10: SQL ინექცია",
            desc: "ჩაწერეთ SQL ინექციის კოდი ავტორიზაციის გვერდის ასაცილებლად: <code>' OR '1'='1</code>",
            answer: "' OR '1'='1",
            placeholder: "შეიყვანეთ SQL კოდი..."
        },
        {
            title: "ქუესთი 5/10: SSH წვდომა",
            desc: "შეიყვანეთ ბრძანება სერვერთან დასაკავშირებლად: <code>ssh -i key.pem root@citybank</code>",
            answer: "ssh -i key.pem root@citybank",
            placeholder: "შეიყვანეთ SSH ბრძანება..."
        },
        {
            title: "ქუესთი 6/10: DDoS შეტევა",
            desc: "ჩაწერეთ ბრძანება 5000 პაკეტის გასაგზავნად: <code>flood -packets 5000</code>",
            answer: "flood -packets 5000",
            placeholder: "შეიყვანეთ ბრძანება..."
        },
        {
            title: "ქუესთი 7/10: კრიპტო-საფულის PIN",
            desc: "შეიყვანეთ მიმდინარე წელი 4-ნიშნა PIN კოდის სახით:",
            answer: "2026",
            placeholder: "შეიყვანეთ 4 ციფრი..."
        },
        {
            title: "ქუესთი 8/10: რადრების ჩახშობა",
            desc: "შეიყვანეთ ჩახშობის სიხშირე: <code>433.92</code>",
            answer: "433.92",
            placeholder: "შეიყვანეთ სიხშირე..."
        },
        {
            title: "ქუესთი 9/10: ექსპლოიტის გაშვება",
            desc: "გააშვიეთ თანხის გადარიცხვის სკრიპტი: <code>python exploit.py --transfer</code>",
            answer: "python exploit.py --transfer",
            placeholder: "შეიყვანეთ სკრიპტის ბრძანება..."
        },
        {
            title: "ქუესთი 10/10: კვალის წაშლა",
            desc: "წაშალეთ სისტემური ლოგები: <code>rm -rf /var/log/system.log</code>",
            answer: "rm -rf /var/log/system.log",
            placeholder: "შეიყვანეთ ბრძანება..."
        }
    ],
    programmer: [
        {
            title: "ქუესთი 1/10: IP-ის დაბლოკვა",
            desc: "ჩაწერეთ ჰაკერის IP-ის დასაბლოკი ბრძანება: <code>block-ip 192.168.1.100</code>",
            answer: "block-ip 192.168.1.100",
            placeholder: "შეიყვანეთ ბრძანება..."
        },
        {
            title: "ქუესთი 2/10: გატეხილი პორტის დახურვა",
            desc: "დახურეთ სარისკო პორტი: <code>close -port 8484</code>",
            answer: "close -port 8484",
            placeholder: "შეიყვანეთ ბრძანება..."
        },
        {
            title: "ქუესთი 3/10: კოდის შეცდომის (Bug) გასწორება",
            desc: "ჩაწერეთ სწორი პირობითი ოპერატორი: <code>if (access == true)</code>",
            answer: "if (access == true)",
            placeholder: "შეიყვანეთ კოდი..."
        },
        {
            title: "ქუესთი 4/10: ბაზის აღდგენა",
            desc: "აღადგინეთ Backup ფაილი: <code>restore --db bank_backup.sql</code>",
            answer: "restore --db bank_backup.sql",
            placeholder: "შეიყვანეთ ბრძანება..."
        },
        {
            title: "ქუესთი 5/10: 2FA დაცვის ჩართვა",
            desc: "ჩაწერეთ ორფაქტორიანი ავტორიზაციის ჩართვის ბრძანება: <code>enable 2fa --force</code>",
            answer: "enable 2fa --force",
            placeholder: "შეიყვანეთ ბრძანება..."
        },
        {
            title: "ქუესთი 6/10: Firewall-ის გადატვირთვა",
            desc: "გადატვირთეთ ფაირვოლი: <code>systemctl restart firewall</code>",
            answer: "systemctl restart firewall",
            placeholder: "შეიყვანეთ ბრძანება..."
        },
        {
            title: "ქუესთი 7/10: Rate Limit-ის დაყენება",
            desc: "დააყენეთ მოთხოვნების ლიმიტი: <code>set-rate-limit 100/sec</code>",
            answer: "set-rate-limit 100/sec",
            placeholder: "შეიყვანეთ ბრძანება..."
        },
        {
            title: "ქუესთი 8/10: დაშიფრული ფაილების აღდგენა",
            desc: "შეიყვანეთ დეკრიპტაციის გასაღები: <code>SECURE_KEY_2026</code>",
            answer: "SECURE_KEY_2026",
            placeholder: "შეიყვანეთ გასაღები..."
        },
        {
            title: "ქუესთი 9/10: პოლიციის სერვერის Reboot",
            desc: "გადატვირთეთ პოლიციის ქსელის სერვერი: <code>reboot --server police_net</code>",
            answer: "reboot --server police_net",
            placeholder: "შეიყვანეთ ბრძანება..."
        },
        {
            title: "ქუესთი 10/10: Cyber Defense პროტოკოლი",
            desc: "გააქტიურეთ მთავარი დაცვის პროტოკოლი: <code>activate-protocol SIGMA-DEFENSE</code>",
            answer: "activate-protocol SIGMA-DEFENSE",
            placeholder: "შეიყვანეთ ბრძანება..."
        }
    ]
};

let currentRole = ""; // 'hacker' ან 'programmer'
let currentQuestIndex = 0;

// თამაშის დაწყების ფუნქცია როლის არჩევისას
function startGame(role) {
    currentRole = role;
    currentQuestIndex = 0;
    renderQuest();
}

// ქუესთის გამოსახვა DOM-ში
function renderQuest() {
    const questsList = questsData[currentRole];
    const questContainer = document.getElementById("quest-container"); // თქვენი ქუესთის კონტეინერის ID
    
    if (currentQuestIndex >= questsList.length) {
        showWinScreen();
        return;
    }
    
    const quest = questsList[currentQuestIndex];
    
    questContainer.innerHTML = `
        <div class="quest-card">
            <h3>${quest.title}</h3>
            <p>${quest.desc}</p>
            <div style="margin-top: 15px;">
                <input type="text" id="quest-input" placeholder="${quest.placeholder}" style="padding: 10px; width: 80%; max-width: 300px;">
                <button onclick="checkQuestAnswer()" style="padding: 10px 15px; cursor: pointer;">დადასტურება</button>
            </div>
            <p id="error-msg" style="color: red; display: none; margin-top: 10px;">❌ არასწორია! სცადეთ თავიდან.</p>
        </div>
    `;
}

// პასუხის შემოწმების ფუნქცია
function checkQuestAnswer() {
    const inputVal = document.getElementById("quest-input").value.trim();
    const currentQuest = questsData[currentRole][currentQuestIndex];
    const errorMsg = document.getElementById("error-msg");
    
    if (inputVal === currentQuest.answer) {
        errorMsg.style.display = "none";
        currentQuestIndex++;
        renderQuest();
    } else {
        errorMsg.style.display = "block";
    }
}

// მოგების ეკრანის ჩვენება
function showWinScreen() {
    const questContainer = document.getElementById("quest-container");
    if (currentRole === "hacker") {
        questContainer.innerHTML = "<h2>🎉 გილოცავთ! თქვენ წარმატებით გატეხეთ სისტემა!</h2>";
    } else {
        questContainer.innerHTML = "<h2>🎉 გილოცავთ! ქალაქის უსაფრთხოება დაცულია!</h2>";
    }
}
