# Sonido para las tres animaciones de EmuRV

Documentación consultada el 13/11/2026. Estos textos se prepararon como propuestas de diseño sonoro. Después, Enrique entregó tres MP3 y confirmó su asignación a Trazo, Ensamble y Cursor; ya están incorporados al reproductor y a las exportaciones MP4. El registro de archivos está en `audio/origen.json` y la integración se describe en `README.md`.

## Modelo y configuración

Hecho verificado · confianza alta: ElevenLabs presenta SFX v3, `eleven_text_to_sound_v3`, como su modelo más reciente de efectos sonoros. Está disponible en Sound Effects de ElevenCreative y en la API. Su documentación destaca mejoras al seguir descripciones con varias instrucciones; los resultados dependen del prompt. El modelo v2 está deprecado aunque la referencia de la API todavía lo indica como predeterminado. Para la API, indicar v3 expresamente. Fuente: [capacidades y modelos de Sound Effects](https://elevenlabs.io/docs/overview/capabilities/sound-effects).

Opinión · confianza moderada: para estas piezas usaría duración manual de 5,4 segundos, Looping desactivado y una influencia inicial de 65 %. Esa influencia es un punto de partida propio, no un ajuste óptimo publicado por ElevenLabs. Mantendría el volumen contenido: el sonido acompañaría la apertura de una herramienta de estudio.

Hecho verificado · confianza alta: el editor permite fijar duración, looping e influencia del prompt; su guía describe descargas MP3 y WAV a 48 kHz. Se puede elegir WAV cuando la opción esté disponible en la cuenta. Los prompts de abajo se mantienen por debajo de los 450 caracteres indicados en la guía del producto. Fuente: [guía de Sound Effects](https://elevenlabs.io/docs/eleven-creative/playground/sound-effects).

## 1 · Trazo · Primera animación

Opinión · confianza moderada: un roce electrónico suave acompaña la construcción del símbolo; un clic señala la unión y una resolución breve acompaña el crédito.

```text
Duration: 5.4 seconds. Quiet startup sound for a RISC-V coding app. 0.2-1.9s: a fine electronic tracing hiss rising gently. At 2.0s, a soft low click. 2.2-3.2s: delicate muted digital ticks. At 3.5s, a warm two-note synth resolution, fading fully by 5.4s. Close, dry, restrained, comfortable at low volume. No speech, music bed, alarms or harsh highs.
```

## 2 · Ensamble · Piezas que encajan

Opinión · confianza moderada: clics pequeños y amortiguados pueden hacer perceptible el encaje de las piezas sin convertirlo en una máquina pesada.

```text
Duration: 5.4 seconds. Quiet logo assembly sound for a coding app. Four small damped ceramic clicks with short soft air movements around 0.8, 1.2, 1.6 and 2.0s. A gentle low confirmation at 2.2s. At 3.5s, a warm clean two-note tone, decaying fully by 5.4s. Intimate, precise, low volume, minimal reverb. No speech, music bed, heavy impacts or sharp highs.
```

## 3 · Cursor · Dos barridos

Opinión · confianza moderada: dos deslizamientos electrónicos siguen el símbolo y el nombre; el cierre comparte el tono cálido de las otras opciones.

```text
Duration: 5.4 seconds. Subtle electronic startup sound for a coding app. A faint smooth glide follows two left-to-right passes: 0.5-2.0s, then 2.2-3.2s. A short rounded digital tick ends each pass. At 3.5s, a warm two-note synth resolution fades to silence by 5.4s. Dry, close, understated, low volume. No voice, music bed, alarm, glitch bursts or piercing tones.
```

## Cómo usarlos

1. Abrir Sound Effects en ElevenCreative y elegir SFX v3.
2. Pegar el prompt de la animación seleccionada. Mantener la duración escrita dentro del prompt y configurar también el campo de duración en **5.4 segundos**.
3. Desactivar Looping. Probar una influencia de **65 %** como ajuste inicial.
4. Generar, escuchar las variaciones y descargar la elegida. Los timestamps son objetivos de diseño, no una garantía de sincronía.
5. Colocar el inicio del audio en el instante 0 de la animación y ajustar sus acentos a los encajes, al nombre y al crédito. Dejar que el sonido se apague durante el estado final.

Inferencia · confianza moderada: para sincronía cuadro a cuadro puede hacer falta editar el resultado. ElevenLabs advierte que el número exacto de repeticiones no siempre se respeta y recomienda generar efectos individuales y combinarlos cuando una secuencia resulta difícil de controlar. Fuentes: [SFX v3 y prompting](https://elevenlabs.io/docs/overview/capabilities/sound-effects), [guía de secuencias complejas](https://elevenlabs.io/docs/eleven-creative/playground/sound-effects).

## Si necesitás ajustar un acento por separado

Son propuestas de pistas aisladas, para montarlas manualmente en lugar de depender de todos los tiempos de una sola generación. Cada prompt incluye su propia duración:

```text
Duration: 1.8 seconds. A quiet, fine electronic tracing glide for a logo being drawn. Smooth onset, gentle rise, clean soft ending. Dry, close, low volume. Isolated sound effect, no speech, music, clicks or alarm.
```

```text
Duration: 0.5 seconds. One small damped ceramic click as a geometric logo piece settles into place, with a tiny soft air movement. Rounded transient, very short tail, low volume. Isolated effect, no music, voice or metallic ringing.
```

```text
Duration: 1.9 seconds. A warm, quiet two-note synthesizer confirmation for a desktop app. Soft attack, short natural decay to silence, restrained upper frequencies. Isolated sound effect, no voice, beat, background music or dramatic impact.
```

La pista de cierre de 1,9 segundos puede comenzar en 3,5 s para terminar en 5,4 s. El clic puede reutilizarse en cada encaje; las posiciones se ajustan en el editor.

## Parámetros de API equivalentes

Hecho verificado · confianza alta: el endpoint acepta estos campos. Sustituir `text` por uno de los prompts anteriores. Esto es una configuración de referencia; no se hizo una llamada ni se consumieron créditos. Fuente: [Create sound effect](https://elevenlabs.io/docs/api-reference/text-to-sound-effects/convert).

```json
{
  "text": "PEGAR EL PROMPT, INCLUYENDO Duration: 5.4 seconds.",
  "model_id": "eleven_text_to_sound_v3",
  "duration_seconds": 5.4,
  "prompt_influence": 0.65,
  "loop": false
}
```

El endpoint es `POST https://api.elevenlabs.io/v1/sound-generation`. La clave se envía en `xi-api-key`; no debe guardarse en los archivos del portafolio.
