---
layout: default
title: Contacto
permalink: /ES/contacto.html
breadcrumbs: >
  <a href="/ES/index.html">Inicio</a> >
  <span>Contacto</span>
---


# Contacto

Ponte en contacto para consultas, colaboraciones o cualquier pregunta. Completa el formulario a continuación:

<form class="contact-form" action="https://formsubmit.co/e.garnicasanchez@gmail.com" method="POST">
    <!-- Campos del formulario -->
    <label for="name">Nombre:</label>
    <input type="text" id="name" name="name" required placeholder="Tu nombre">

    <label for="email">Correo Electrónico:</label>
    <input type="email" id="email" name="email" required placeholder="Tu correo electrónico">

    <label for="message">Mensaje:</label>
    <textarea id="message" name="message" rows="5" required placeholder="Tu mensaje"></textarea>

    <!-- Botón de envío -->
    <button type="submit">Enviar</button>

    <!-- Campos ocultos opcionales para configurar el formulario -->
    <input type="hidden" name="_next" value="https://eggs-artesvisuales.github.io/ES/gracias.html">
    <input type="hidden" name="_captcha" value="false">
</form>
