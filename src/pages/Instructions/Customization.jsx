// - tailwind
// - add your own styles
// - component pages give you examples of build in customization

import React from "react";
import { RenderCode } from "../../components/RenderCode/RenderCode";
import styles from "./Instructions.module.scss";

const Customization = () => {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Customization</h1>
      <section className={styles.shadow}>
        <h2 className={styles.subtitle}>
          Quick Swag - Using Presets Like a Pro
        </h2>

        <p className={styles.paragraph}>
          Why reinvent the wheel? Awesome CL's presets let you hit the ground
          running with pre-styled components. Just pass the props and watch the
          magic happen:
        </p>
        <div className={styles.code}>
          <RenderCode
            code={
              '<Button border="full" color="danger" size="lg">Say hello!</Button>'
            }
          />
        </div>
        <p className={styles.paragraph}>
          Props can simply be added inline to customize your component. Make
          sure to browse the component's documentation page to see a full list
          of its properties and default values.
        </p>
      </section>
      <section className={styles.shadow}>
        <h2 className={styles.subtitle}>
          Your Style, Your Rules - Adding Custom Flare
        </h2>
        <p className={styles.paragraph}>
          All of our components come with a className property that allows you
          to easily add your own classnames to apply themes and styles that fit
          your branding!
        </p>
        <div className={styles.code}>
          <RenderCode
            code={'<Button className="swag style fashion">Say hello!</Button>'}
          />
        </div>
        <p className={styles.paragraph}>
          For those who need an even more precise fine tuning option you can
          also add inline styles with the style property. Use it like you would
          in HTML.
        </p>
        <div className={styles.code}>
          <RenderCode
            code={
              '<Button style={{color: "tomato", width: "100px"}}>Say hello!</Button>'
            }
          />
        </div>
      </section>

      <section className={styles.shadow}>
        <h2 className={styles.subtitle}>
          Level Up your Workflow with Tailwind
        </h2>
        <p className={styles.paragraph}>
          Awesome CL comes with full Tailwind integration that allows you to
          style with ease for simply awesome results:
        </p>
        <ul>
          <section className={styles.shadow}>
            <li className={styles.paragraph}>1. Install Tailwind</li>
            <div className={styles.code}>
              <RenderCode
                code={"npm install -D tailwindcss\nnpx tailwindcss init "}
              />
            </div>
          </section>
          <section className={styles.shadow}>
            <li className={styles.paragraph}>
              2. Add Tailwind's directives to your CSS file (e.g.,
              styles/tailwind.css):
            </li>
            <div className={styles.code}>
              <RenderCode
                code={
                  "@tailwind base;\n@tailwind components;\n@tailwind utilities;"
                }
              />
            </div>
          </section>
          <section className={styles.shadow}>
            <li className={styles.paragraph}>
              3. Import your Tailwind CSS into your project:
            </li>
            <div className={styles.code}>
              <RenderCode code={"import './styles/tailwind.css';"} />
            </div>
          </section>
          <section className={styles.shadow}>
            <li className={styles.paragraph}>
              4. Start using Tailwind classes directly on your components:
            </li>
            <div className={styles.code}>
              <RenderCode
                code={
                  '<Button className="bg-blue-500 text-white font-bold py-2 px-4 rounded">Click Me</Button>'
                }
              />
            </div>
          </section>
        </ul>
      </section>
    </div>
  );
};

export default Customization;
