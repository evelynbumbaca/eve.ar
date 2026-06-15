/* EVE — Tweaks island. Vanilla site + a small React panel that
   writes data-* on :root (everything else is CSS in tweaks.css). */
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": "gallery",
  "type": "swiss",
  "rhythm": "balanced"
}/*EDITMODE-END*/;

function EveTweaks(){
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  React.useEffect(()=>{
    const r = document.documentElement;
    r.setAttribute('data-palette', t.palette);
    r.setAttribute('data-type', t.type);
    r.setAttribute('data-rhythm', t.rhythm);
    // re-run the reveal pass so dropped-in cards (sparse) settle correctly
    if (window.EVEreveal) requestAnimationFrame(()=>window.EVEreveal());
  }, [t.palette, t.type, t.rhythm]);

  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Colour world" />
      <TweakRadio label="Mood" value={t.palette}
        options={['paper','gallery','noir']}
        onChange={(v)=>setTweak('palette', v)} />

      <TweakSection label="Typographic voice" />
      <TweakRadio label="Voice" value={t.type}
        options={['editorial','swiss','mono']}
        onChange={(v)=>setTweak('type', v)} />

      <TweakSection label="Gallery rhythm" />
      <TweakRadio label="Cadence" value={t.rhythm}
        options={['sparse','balanced','dense']}
        onChange={(v)=>setTweak('rhythm', v)} />
    </TweaksPanel>
  );
}

// set initial attributes immediately (before React mounts) so first paint is
// correct. Persistence is handled by the host rewriting TWEAK_DEFAULTS on disk.
(function(){
  const r = document.documentElement;
  r.setAttribute('data-palette', TWEAK_DEFAULTS.palette);
  r.setAttribute('data-type', TWEAK_DEFAULTS.type);
  r.setAttribute('data-rhythm', TWEAK_DEFAULTS.rhythm);
})();

const __eveTweakMount = document.createElement('div');
document.body.appendChild(__eveTweakMount);
ReactDOM.createRoot(__eveTweakMount).render(<EveTweaks />);
