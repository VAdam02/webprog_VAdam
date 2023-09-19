console.log("Hello, world!");

const helloWorldP = document.getElementById("helloWorld");

helloWorldP.innerHTML = "Hello world!";

helloWorld.innerHTML = "akármi";

helloWorldCount.addEventListener("change", () => printHelloWorld2())

function printHelloWorld2()
{
    console.log("Hello world2");
}

helloWorldCount.addEventListener("change", () => printHelloWorld())

function printHelloWorld()
{
    let n = helloWorldCount.value;

    if (!n.match(/^\d+$/)) return;

    helloWorldNovekvo.innerHTML = "";
    let output = "";

    for (let i = 0; i < n; i++)
    {
        output += `<p style="font-size: ${i * 2 + 10}px">Hello</p>`;
    }
    helloWorldNovekvo.innerHTML = output;
}

szorzotablaCount.addEventListener("change", () => printMultiplicationTable2())

function printMultiplicationTable()
{
    let n = szorzotablaCount.value;

    if (!n.match(/^\d+$/)) return;

    let output = "";
    for (let i = 1; i <= n; i++)
    {
        output += `<tr>`;

        for (let j = 1; j <= n; j++)
        {
            if (i == 1)
            {
                output += `<td><b>${j}</b></td>`;
            }
            else if (j == 1)
            {
                output += `<td><b>${i}</b></td>`;
            }
            else
            {
                output += `<td>${i*j}</td>`;
            }
        }

        output += `</tr>`;
    }

    szorzotabla.innerHTML = output;
}

function printMultiplicationTable2()
{
    let n = szorzotablaCount.value;

    if (!n.match(/^\d+$/)) return;

    szorzotabla.innerHTML = "";

    for (let i = 1; i <= n; i++)
    {
        let tr = document.createElement("tr");
        for (let j = 1; j <= n; j++)
        {
            let td = document.createElement("td");
            td.textContent = i * j;
            tr.appendChild(td);
        }
        szorzotabla.appendChild(tr);
    }
}
