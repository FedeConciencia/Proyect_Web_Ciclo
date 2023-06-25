import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "./styles.module.scss";
import { Form, Message } from "semantic-ui-react";

import { MaxContainer } from "@/components/mixins";

const PasswordProtectPage = () => {
  const router = useRouter();
  const error = router.query.error;
  return (
    <MaxContainer>
      <div className={styles.container}>
        <div className={styles.form}>
          <div className={styles.icon_yellow}>
            <Link href="/admin">
              <Image
                src="/ciclos/icon_yellow.png"
                alt="Ciclos"
                width={80}
                height={80}
              />
            </Link>
          </div>
          <h2 className={styles.title}>
            <p>Bienvenido</p>
          </h2>
          <div>
            <Form
              action="/api/password-protect"
              method="post"
              error={error ? true : false}
            >
              {" "}
              {error && (
                <Message error header="Ocurio un Error" content={error} />
              )}
              <Form.Input
                fluid
                required
                label="Contraseña"
                type="password"
                id="password"
                name="password"
              />
              <Form.Button content="Entrar" circular color="pink" />
            </Form>
          </div>
        </div>
      </div>
    </MaxContainer>
  );
};
export default PasswordProtectPage;
