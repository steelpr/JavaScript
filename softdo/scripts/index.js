function mySolution() {
    document.querySelector('#inputSection button').addEventListener('click', function () {
        let input = document.querySelector('#inputSection textarea').value;
        let inputText = document.querySelector('#inputSection input').value;

        let divPending = document.createElement('div');
        divPending.className = 'pendingQuestion';

        let img = document.createElement('img');
        img.src = './images/user.png';
        img.width = 32;
        img.height = 32;

        let span = document.createElement('span');

        if (inputText === '') {
            span.textContent = 'Anonymous';
        }
        else{
        span.textContent = inputText;
        }

        let p = document.createElement('p');
        let textParagraph = document.createTextNode(input);
        p.appendChild(textParagraph);

        let div = document.createElement('div');
        div.className = 'actions';

        let buttonArch = document.createElement('button');
        buttonArch.className = 'archive';
        buttonArch.textContent = "Archive";
        buttonArch.addEventListener('click', function () {
            let currentDiv = div.parentElement;

            document.getElementById('pendingQuestions').removeChild(currentDiv);
        });

        let btnOpen = document.createElement('button');
        btnOpen.className = 'open';
        btnOpen.textContent = 'Open';

        btnOpen.addEventListener('click', function () {
            let divOpen = document.createElement('div');
            divOpen.className = 'openQuestion';

            let imgOpen = document.createElement('img');
            imgOpen.src = './images/user.png';
            imgOpen.width = 32;
            imgOpen.height = 32;

            let spanOpen = document.createElement('span');

            if (inputText === '') {
                spanOpen.textContent = 'Anonymous';
            }
            else{
            spanOpen.textContent = inputText;
            }

            let pOpen = document.createElement('p');
            let textParagraphOpen = document.createTextNode(input);
            pOpen.appendChild(textParagraphOpen);

            let divOpenA = document.createElement('div');
            divOpenA.className = 'actions';

            let divReply = document.createElement('div');

            let btnReply = document.createElement('button');
            btnReply.className = 'reply';
            btnReply.textContent = 'Reply';
            btnReply.addEventListener('click', function () {
                divReply.style.display = 'block';
                btnReply.textContent = 'Back'         
            })

            divOpenA.appendChild(btnReply);

            divReply.className = 'replySection';
            divReply.style.display = 'none';


            let ol = document.createElement('ol');
            ol.className = 'reply';
            ol.type = 1;

            let inputReply = document.createElement('input');
            inputReply.className = 'replyInput';
            inputReply.type = 'text';
            inputReply.placeholder = 'Reply to this question here...';

            let replyBtn = document.createElement('button');
            replyBtn.className = 'replyButton';
            replyBtn.textContent = 'Send';
            replyBtn.addEventListener('click', function(){
                let li = document.createElement('li');
                li.textContent = inputReply.value;
                ol.appendChild(li);
                inputReply.value = '';
            })


           
            divReply.appendChild(inputReply);
            divReply.appendChild(replyBtn);
            divReply.appendChild(ol);

            divOpen.appendChild(img);
            divOpen.appendChild(spanOpen);
            divOpen.appendChild(pOpen);
            divOpen.appendChild(divOpenA);
            divOpen.appendChild(divReply)

            document.getElementById('openQuestions').appendChild(divOpen);

            let currentDiv = div.parentElement;

            document.getElementById('pendingQuestions').removeChild(currentDiv);

        });

        div.appendChild(buttonArch);
        div.appendChild(btnOpen);

        divPending.appendChild(img);
        divPending.appendChild(span);
        divPending.appendChild(p);
        divPending.appendChild(div);
        document.getElementById('pendingQuestions').appendChild(divPending);

        document.querySelector('#inputSection textarea').value = '';
        document.querySelector('#inputSection input').value = '';
    });


}
