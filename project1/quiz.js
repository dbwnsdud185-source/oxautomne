// 문제 리스트
const quiz = [
    {
        q: "1) 당신의 출생년도는??",
        options: [
            {
                label: "1970~1990",
                img: "img/grand.jpg",
                score: 1
            },
            {
                label: "1991~",
                img: "img/child.jpg",
                score: 0
            }
        ]
    },
    {
        q: "2) 내가 갖고 싶은 자동차는??",
        options: [
            { label: "카니발 하이리무진", img: "img/carnival.jpg", score: 1 },
            { label: "제네시스",           img: "img/genesis.avif",   score: 0 }
        ]
    },
    {
        q: "3) 내가 갖고싶은 아이폰 색상은??",
        options: [
            { label: "코스믹 오렌지",     img: "img/orange.jpg", score: 1 },
            { label: "블랙 or 화이트",    img: "img/iphone.jpg",   score: 0 }
        ]
    },
    {
        q: "4) 만약, 러닝 또는 독서후에 당신의 행동은??",
        options: [
            { label: "휴식",             img: "img/rest.jpg",             score: 0 },
            { label: "인스타그램 업로드", img: "img/run.jpg", score: 1 }
        ]
    },
    {
        q: "5) 오늘은 쇼핑하는 날! 내가 사고싶은 옷은??",
        options: [
            { label: "스투시, 슈프림, 스톤아일랜드", img: "img/street.jpg", score: 1 },
            { label: "헤지스, 빈폴, 닥스",           img: "img/logo.jpg",       score: 0 }
        ]
    },
    {
        q: "6) 젊은 직원이 어려움에 처했을때 나의 행동은??",
        options: [
            { label: "힘들지? 그거.. 다 그런거야.", img: "img/tough-times.png", score: 1 },
            { label: "와.. 이거 너무 스트레스네. 우리 일단 커피 한 잔 할까?", img: "img/coffee.png", score: 0 }
        ]
    },
    {
        q: "7) 물놀이를 간다면 더 먹고 싶은것은??",
        options: [
            { label: "한방 능이 백숙", img: "img/hanbang-neungi-baeksuk.png", score: 0 },
            { label: "바베큐",         img: "img/barbecue.png",              score: 1 }
        ]
    },
    {
        q: "8) 더 편한 SNS소통 방식은??",
        options: [
            { label: "인스타그램 DM", img: "img/instagram-dm.png", score: 1 },
            { label: "카카오톡",      img: "img/kakaotalk.png",    score: 0 }
        ]
    },
];

let index = 0;
let totalScore = 0;

const qTitle      = document.getElementById("q-title");
const optionsBox  = document.getElementById("options");
const progressBar = document.getElementById("progress-bar");

// 진행 바 업데이트
function updateProgress() {
    const percent = (index / quiz.length) * 100;
    progressBar.style.width = `${percent}%`;
}

// 문제 출력
function loadQuestion() {
    const q = quiz[index];

    qTitle.innerText = q.q;
    optionsBox.innerHTML = "";

    // 선택지 버튼 + 이미지 생성
    q.options.forEach((opt) => {
        optionsBox.innerHTML += `
            <button class="choice-btn" data-score="${opt.score}">
                <img src="${opt.img}" alt="${opt.label}">
                <div class="choice-label">${opt.label}</div>
            </button>
        `;
    });

    // 버튼 클릭 이벤트 등록
    document.querySelectorAll(".choice-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const score = Number(btn.dataset.score);
            totalScore += score;

            index++;
            updateProgress();

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
    if (totalScore >= 6)      result = "사형";
    else if (totalScore >= 3) result = "무기징역";
    else                      result = "혐의없음";

    localStorage.setItem("result", result);

    progressBar.style.width = "100%";

    // 로딩 화면
    document.body.innerHTML = `
        <main class="center">
            <h1 class="loading-title">결과 분석 중...</h1>
            <div class="loader"></div>
        </main>
    `;

    setTimeout(() => {
        location.href = "result.html";
    }, 2000);
}

// 처음 실행
updateProgress();
loadQuestion();
