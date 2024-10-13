export function htmlTemplate(name: string, message: string, email: string) {
    return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email</title>
    <style>
             body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }
        .container {
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        .header {
            background-color: #A53DFF;
            color: #FFFFFF;
            text-align: center;
            padding: 20px;
        }
        .header h1 {
            margin: 0;
            font-size: 24px;
        }
        .body {
            background-color: #FFFFFF;
            color: #000000;
            padding: 20px;
            font-size: 16px;
            line-height: 1.5;
            border: 1px solid #000000;
        }
        .footer {
            background-color: #f4f4f4;
            color: #333333;
            text-align: center;
            padding: 10px;
            font-size: 14px;
            border-top: 1px solid #dddddd;
        }
        .footer a {
            color: #A53DFF;
            text-decoration: none;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1> Formulário de contato</h1>
        </div>
        <div class="body">
            <p>Nome: ${name}</p>
            <p>Email: ${email}</p>
            <p>${message}</p>
        </div>
        <div class="footer">
            <p>Atenciosamente: ${name}, ${email}</p>
        </div>
    </div>
</body>
</html>`
}