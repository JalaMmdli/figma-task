const data = [
    ["Bitkoin", "BTC", "9685", "2.83%"],
    ["Efirium", "ETH", "210.5", "6.17%"],
    ["Ripl", "XRP", "0.2812", "2.47%"],
    ["Bitcoin Cash", "BCH", "441.4", "5.01%"],
    ["Bitcoin SV", "BSV", "303.17", "5.53%"],
    ["Laytkoin", "LTC", "74.935", "4.25%"],
    ["Tether", "USDT", "0.9994", "-1.7%"],
    ["EOS", "EOS", "4.6161", "3.15%"],
    ["Binance Coin", "BNB", "19.824", "-3.82%"],
    ["Cardano", "ADA", "0.060389", "2.93%"],
    ["Tezos", "XTZ", "2.1247", "6.12%"],
    ["Efirium Klassik", "ETC", "12.5988", "4.09%"],
    ["Stellar", "XLM", "0.07034", "-4.10%"],
    ["Monero", "XMR", "79.523", "3.45%"],
    ["TRON", "TRX", "0.020881", "5.21%"]
]



    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');
    const headerRow = document.createElement('tr');
    const headers = ['Name', 'Ticket', 'Price', 'Change in 24 hours'];

    headers.forEach((headerText,index) => {
        const th = document.createElement('th');
        th.textContent = headerText;
        headerRow.appendChild(th);
        if (index === 0) {
            th.style.backgroundColor = 'purple'; 
            th.style.color = 'white'; 
        }
        if (index === headers.length - 1) {
            th.style.backgroundColor = 'purple';
            th.style.color = 'white'; 
        }
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);
    
    data.forEach(row => {
        const tr = document.createElement('tr');
        row.forEach(cellData => {
            const td = document.createElement('td');
            td.textContent = cellData;
            tr.appendChild(td);
        });
        tbody.appendChild(tr);
      
    });

    table.appendChild(tbody);
    document.body.appendChild(table);

  
let x="25";
let z=12
w=13

4+13+9+banana+0+true=


