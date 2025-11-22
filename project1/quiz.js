// 문제 리스트
const quiz = [
    {
        q: "1) 나는 40대는 아직 젊다고 생각한다.",
        options: ["네", "아니오"],
        score: [1, 0]
    },
    {
        q: "2) 나는 주변 친구들 보다 young하다고 생각한다.",
        options: ["네", "아니오"],
        score: [1, 0]
    },
    {
        q: "3) 아이폰 새로운 색상이 나오면 꼭 사고 싶다.",
        options: ["네", "아니오"],
        score: [1, 0]
    },
    {
        q: "4) 나는 MZ를 좋아한다.",
        options: ["네", "아니오"],
        score: [1, 0]
    },
    {
        q: "5) ?",
        options: ["네", "아니오"],
        score: [1, 0]
    },  
    {
        q: "6) ?",
        options: ["네", "아니오"],
        score: [1, 0]
    },
    {
        q: "7) ?",
        options: ["네", "아니오"],
        score: [1, 0]
    },
    {
        q: "8) ?",
        options: ["네", "아니오"],
        score: [1, 0]
    },
    {
        q: "9) ?",
        options: ["네", "아니오"],
        score: [1, 0]
    },
    {
        q: "10) ?",
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

        if (totalScore >= 7) result = "🔥 매우 활발한 타입!";
        else if (totalScore >= 4) result = "🙂 평범한 타입!";
        else result = "😴 조용한 타입!";

        localStorage.setItem("result", result);

        location.href = "result.html";
    }
});
