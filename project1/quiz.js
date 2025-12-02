// 문제 리스트 (그대로)
const quiz = [
    { q: "1) 당신의 출생년도는??", options: ["1970~1990", "1991~"], score: [1, 0] },
    { q: "2) 내가 갖고 싶은 자동차는??", options: ["카니발 하이리무진", "제네시스"], score: [1, 0] },
    { q: "3) 내가 갖고싶은 아이폰 색상은??", options: ["코스믹 오렌지", "블랙 or 화이트"], score: [1, 0] },
    { q: "4) 만약, 러닝 또는 독서후에 당신의 행동은??", options: ["휴식", "인스타그램 업로드"], score: [0, 1] },
    { q: "5) 오늘은 쇼핑하는 날! 내가 사고싶은 옷은??", options: ["스투시, 슈프림, 스톤아일랜드", "헤지스, 빈폴, 닥스"], score: [1, 0] },
    { q: "6) 젊은 직원이 어려움에 처했을때 나의 행동은??", options: ["힘들지? 그거.. 다 그런거야.", "와.. 이거 너무 스트레스네. 우리 일단 커피 한 잔 할까?"], score: [0, 1] },
    { q: "7) 물놀이를 간다면 더 먹고 싶은것은??", options: ["한방 능이 백숙", "바베큐"], score: [0, 1] },
    { q: "8) 더 편한 SNS소통 방식은??", options: ["인스타그램 DM", "카카오톡"], score: [1, 0] },
];

let index = 0;
let totalScore = 0;

const qTitle = document.getElementById("q-title");
const optionsBox = document.getElementById("options");
const progressBar = document.getElementById("progress-bar");

// 진행 바 업데이트 함수
function updateProgress() {
    const percent = (index / quiz.length) * 100;
    progressBar.style.width = `${percent}%`;
}

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

            updateProgress();  // 답 선택할 때마다 진행 바 업데이트

            if (index < quiz.length) {
                loadQuestion();
            } else {
                showResult();
            }
        });
    });
}

function showResult() {
    // 점수 → 결과 텍스트
    let result = "";
    if (totalScore >= 6) result = "사형";
    else if (totalScore >= 3) result = "무기징역";
    else result = "혐의없음";

    localStorage.setItem("result", result);

    // 진행 바 100% 채우기
    progressBar.style.width = "100%";

    // ✨ 로딩 화면 보여주기
    document.body.innerHTML = `
        <main class="center">
            <h1 class="loading-title">결과 분석 중...</h1>
            <div class="loader"></div>
        </main>
    `;

    // 2초 뒤 결과 페이지로 이동
    setTimeout(() => {
        location.href = "result.html";
    }, 2000);
}

// 처음 로딩 시 0%로 세팅 + 첫 문제 표시
updateProgress();
loadQuestion();
