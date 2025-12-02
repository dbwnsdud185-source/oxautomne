// 문제 리스트 (그대로)
const quiz = [
    { q: "1) 나이는 숫자에 불과하다고 생각한다.", options: ["네", "아니오"], score: [1, 0] },
    { q: "2) 나는 주변 사람들보다 젊다고 생각한다.", options: ["네", "아니오"], score: [1, 0] },
    { q: "3) 아이폰 새로운 색상이 나오면 꼭 사고 싶다.", options: ["네", "아니오"], score: [1, 0] },
    { q: "4) 외제차를 보유중이거나 카니발을 타고 다닌다.", options: ["네", "아니오"], score: [1, 0] },
    { q: "5) 러닝을 취미로 삼고있다.", options: ["네", "아니오"], score: [1, 0] },
    { q: "6) 스투시, 슈프림, 스톤아일랜드 등을 즐겨입는다.", options: ["네", "아니오"], score: [1, 0] },
    { q: "7) 젊은 직원들을 보면 챙겨주고 싶다.", options: ["네", "아니오"], score: [1, 0] },
    { q: "8) MZ세대 문화를 이해하고 있다.", options: ["네", "아니오"], score: [1, 0] },
    { q: "9) 유행에 민감하다.", options: ["네", "아니오"], score: [1, 0] },
    { q: "10) 사실 나인 것 같다.", options: ["네", "아니오"], score: [1, 0] },
];

let index = 0;
let totalScore = 0;

const qTitle = document.getElementById("q-title");
const optionsBox = document.getElementById("options");

// 문제 출력 함수
function loadQuestion() {
    const q = quiz[index];

    qTitle.innerText = q.q;

    // 버튼 UI 생성
    optionsBox.innerHTML = `
        <button class="choice-btn" data-score="${q.score[0]}">${q.options[0]}</button>
        <button class="choice-btn" data-score="${q.score[1]}">${q.options[1]}</button>
    `;

    // 버튼 클릭 이벤트 등록
    document.querySelectorAll(".choice-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const score = Number(btn.dataset.score);
            totalScore += score;

            index++;

            if (index < quiz.length) {
                loadQuestion();
            } else {
                showResult();
            }
        });
    });
}

function showResult() {
    let result = "";

    if (totalScore >= 8) result = "영포티 레전드";
    else if (totalScore >= 5) result = "준영포티";
    else result = "NOT 영포티";

    localStorage.setItem("result", result);
    location.href = "result.html";
}

loadQuestion();
