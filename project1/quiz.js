// 문제 리스트
const quiz = [
    {
        q: "1) 나이는 숫자에 불과하다고 생각한다.",
        options: ["네", "아니오"],
        score: [1, 0]
    },
    {
        q: "2) 나는 주변 사람들보다 젊다고 생각한다.",
        options: ["네", "아니오"],
        score: [1, 0]
    },
    {
        q: "3) 아이폰 새로운 색상이 나오면 꼭 사고 싶다.",
        options: ["네", "아니오"],
        score: [1, 0]
    },
    {
        q: "4) 외제차를 보유중이거나 카니발을 타고 다닌다.",
        options: ["네", "아니오"],
        score: [1, 0]
    },
    {
        q: "5) 러닝을 취미로 삼고있다.",
        options: ["네", "아니오"],
        score: [1, 0]
    },  
    {
        q: "6) 스투시, 슈프림, 스톤아일랜드와 같은 해외 브랜드 옷을 즐겨 입는다.",
        options: ["네", "아니오"],
        score: [1, 0]
    },
    {
        q: "7) 젊은 남/여직원들을 보면 챙겨주고 싶어진다. ",
        options: ["네", "아니오"],
        score: [1, 0]
    },
    {
        q: "8) MZ세대 문화를 이해하고 있다.",
        options: ["네", "아니오"],
        score: [1, 0]
    },
    {
        q: "9) 유행에 민감하다.",
        options: ["네", "아니오"],
        score: [1, 0]
    },
    {
        q: "10) 사실 나인것 같다.",
        options: ["네", "아니오"],
        score: [1, 0]
    }
];

let index = 0;
let totalScore = 0;

// 요소
const qTitle = document.getElementById("q-title");
const optionsBox = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");

// 문제 출력 함수
function loadQuestion() {
    const q = quiz[index];

    qTitle.innerText = q.q;
    optionsBox.innerHTML = "";

    q.options.forEach((opt, i) => {
        optionsBox.innerHTML += `
        <label class="option">
            <input type="radio" name="opt" value="${q.score[i]}">
            ${opt}
        </label>
        `;
    });
}

loadQuestion();

// 다음 버튼
nextBtn.addEventListener("click", () => {
    const selected = document.querySelector("input[name='opt']:checked");
    if (!selected) {
        alert("선택해주세요!");
        return;
    }

    totalScore += parseInt(selected.value);

    index++;

    if (index < quiz.length) {
        loadQuestion();
    } else {
        // 점수 기반 결과
        let result = "";

        if (totalScore >= 2) result = "사형";
        else if (totalScore >= 4) result = "무기징역";
        else result = "정상";

        localStorage.setItem("result", result);

        location.href = "result.html";
    }
});
