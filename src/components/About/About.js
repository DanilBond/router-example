import classes from "./About.module.css";

const About = () => {
  return (
    <div className={classes.About}>
      <h2>This is about page</h2>
      <p className={classes.par}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec
        dignissim risus. Sed elit ex, dignissim ac est nec, porta rutrum lorem.
        Aenean maximus vestibulum ullamcorper. Aliquam lobortis, odio a suscipit
        commodo, dolor tortor mattis urna, eu pretium enim ipsum eget turpis.
        Aliquam aliquam, orci sed bibendum tristique, velit nisl facilisis orci,
        at luctus est eros in sapien. Aenean et nulla at mi accumsan vehicula.
        Nunc tristique dolor quis odio luctus, consequat lacinia ante tempus.
        Praesent imperdiet laoreet libero eget tincidunt. Morbi elementum
        efficitur nisi nec malesuada. Integer commodo turpis nec faucibus
        venenatis. Class aptent taciti sociosqu ad litora torquent per conubia
        nostra, per inceptos himenaeos. Nulla aliquet enim ut pretium
        sollicitudin. Class aptent taciti sociosqu ad litora torquent per
        conubia nostra, per inceptos himenaeos.
      </p>
      <p className={classes.par}>
        Mauris a velit elementum, consequat dolor sit amet, vestibulum lorem.
        Aenean ullamcorper eleifend ipsum, eu finibus orci. Donec magna sem,
        ultricies vel imperdiet id, sagittis eu neque. Cras ullamcorper quam
        nunc, et ultricies odio malesuada quis. Nullam posuere lacus ut ultrices
        gravida. Interdum et malesuada fames ac ante ipsum primis in faucibus.
        Vivamus efficitur erat diam, id efficitur ex varius et. Nullam et auctor
        augue, sed ultricies leo. Quisque nec leo ut enim facilisis porttitor.
        Vestibulum molestie vestibulum ornare. Etiam velit augue, pretium vel
        nibh vel, varius gravida ipsum. Nullam et odio auctor, facilisis odio
        sed, sollicitudin mi. Mauris tempus elit non rhoncus mattis. Maecenas ut
        magna quis mauris interdum tristique pharetra vitae lacus.
      </p>
    </div>
  );
};

export default About;
