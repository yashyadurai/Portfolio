const About = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8">About</h2>
        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            I'm a passionate developer who loves crafting elegant solutions to complex problems. 
            My journey in tech started with curiosity and has evolved into a deep commitment to 
            building software that makes a difference.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            I specialize in full-stack development, with a keen interest in modern web technologies, 
            clean code practices, and creating seamless user experiences. When I'm not coding, 
            you'll find me exploring new technologies, contributing to open source, or learning 
            something new.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
