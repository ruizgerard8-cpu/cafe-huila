<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Finca Alto Horizonte - Café de Especialidad</title>
  <style>
    body {
      margin: 0;
      font-family: Arial, sans-serif;
      background: #f7f3ea;
      color: #2b2b2b;
    }

    header {
      height: 80vh;
      background: url('https://images.unsplash.com/photo-1509042239860-f550ce710b93') center/cover;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      text-align: center;
      color: white;
    }

    header::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0,0,0,0.6);
    }

    header div {
      position: relative;
      max-width: 800px;
      padding: 20px;
    }

    h1 {
      font-size: 3rem;
      margin-bottom: 10px;
    }

    section {
      padding: 60px 20px;
      max-width: 1100px;
      margin: auto;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
    }

    .card {
      background: white;
      padding: 20px;
      border-radius: 12px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }

    h2 {
      text-align: center;
      margin-bottom: 20px;
    }

    .dark {
      background: #2d2a26;
      color: white;
      text-align: center;
    }

    footer {
      padding: 40px;
      text-align: center;
      background: #111;
      color: white;
    }

    .btn {
      display: inline-block;
      padding: 12px 20px;
      background: white;
      color: black;
      text-decoration: none;
      margin-top: 15px;
      border-radius: 8px;
      font-weight: bold;
    }
  </style>
</head>
<body>

<header>
  <div>
    <h1>Finca Alto Horizonte</h1>
    <p>Café de especialidad de alta gastronomía • Origen Huila • Hasta 92 puntos SCA</p>
    <a class="btn" href="#historia">Conocer la finca</a>
  </div>
</header>

<section>
  <h2>Calidad del café</h2>
  <div class="grid">
    <div class="card">
      <h3>Cultivo de altura</h3>
      <p>Producción en montañas de Huila con suelos volcánicos y clima ideal.</p>
    </div>
    <div class="card">
      <h3>92 puntos SCA</h3>
      <p>Café de especialidad con reconocimiento en taza de alta calidad.</p>
    </div>
    <div class="card">
      <h3>Origen Colombia</h3>
      <p>Finca familiar con tradición cafetera y producción artesanal.</p>
    </div>
  </div>
</section>

<section id="historia">
  <h2>Nuestra historia</h2>
  <p style="max-width:800px;margin:auto;line-height:1.6;">
    Ubicada en La Plata, Huila, Colombia, Finca Alto Horizonte es una finca familiar dedicada al café de especialidad.
    A más de 1.900 metros de altitud, trabajamos con suelos volcánicos y microclimas únicos que aportan complejidad al café.
    Nuestra familia mantiene un proceso artesanal con recolección manual y selección cuidadosa de cada cereza.
  </p>
</section>

<section>
  <h2>Nuestro café</h2>
  <div class="grid">
    <div class="card"><b>Origen:</b> La Plata, Huila</div>
    <div class="card"><b>Altitud:</b> 1.900 m.s.n.m.</div>
    <div class="card"><b>Variedades:</b> Castillo, Caturra, Geisha</div>
    <div class="card"><b>Proceso:</b> Lavado fermentación prolongada</div>
    <div class="card"><b>Recolección:</b> Manual selectiva</div>
    <div class="card"><b>Calidad:</b> Hasta 92 SCA</div>
  </div>
</section>

<section class="dark">
  <h2>Dirigido a alta gastronomía</h2>
  <p style="max-width:800px;margin:auto;line-height:1.6;">
    Café exclusivo para restaurantes, tostadores y profesionales que buscan origen, trazabilidad y excelencia en taza.
  </p>
</section>

<footer>
  <p>Finca Alto Horizonte • Café de especialidad de Colombia</p>
</footer>

</body>
</html>
