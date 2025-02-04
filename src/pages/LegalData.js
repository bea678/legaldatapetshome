import React, { useEffect, useState } from "react";
import ControlPointIcon from "@material-ui/icons/ControlPoint";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";

const LegalData = () => {
  const [firstOpened, setFirstOpened] = useState(false);
  const [secondOpened, setSecondOpened] = useState(false);
  const [thirdOpened, setThirdOpened] = useState(false);
  const [fourOpened, setFourOpened] = useState(false);
  const [fiveOpened, setFiveOpened] = useState(false);
  const [sixOpened, setSixOpened] = useState(false);
  const [sevenOpened, setSevenOpened] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      <div className="title">
        <h1 style={{ color: "#ff9d59", fontSize: "35px" }}>
          Información Legal de PetsHome
        </h1>
      </div>
      <div className="box">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <p
            style={{
              fontSize: "20.5px",
              fontWeight: "bold",
              color: "black",
              textDecorationLine: "underline",
              textAlign: "center",
            }}
          >
            1. Términos y condiciones
          </p>
          {firstOpened ? (
            <RemoveCircleOutlineIcon
              style={{
                alignSelf: "center",
                marginLeft: "2%",
                fontSize: "30px",
                cursor: "pointer",
              }}
              onClick={() => setFirstOpened(false)}
            />
          ) : (
            <ControlPointIcon
              style={{
                alignSelf: "center",
                marginLeft: "2%",
                fontSize: "30px",
                cursor: "pointer",
              }}
              onClick={() => setFirstOpened(true)}
            />
          )}
        </div>
        {!firstOpened ? (
          <p
            style={{ fontSize: "14.5px", color: "#636363", marginTop: "-0.5%" }}
          >
            Bienvenido/a a PetsHome. Los siguientes términos y condiciones (en
            adelante, "Términos") regulan el acceso y uso de esta aplicación (en
            adelante, "la Aplicación")...
          </p>
        ) : (
          <p style={{ fontSize: "16px", color: "black", marginTop: "-0.5%" }}>
            Bienvenido/a a PetsHome. Los siguientes términos y condiciones (en
            adelante, "Términos") regulan el acceso y uso de esta aplicación (en
            adelante, "la Aplicación"), así como de todos los contenidos y
            servicios puestos a disposición a través de ella. Al acceder o
            utilizar la Aplicación, usted (en adelante, "el Usuario") acepta
            estar sujeto a estos Términos, así como a nuestra política de
            privacidad. Si no está de acuerdo con estos Términos o con nuestra
            política de privacidad, por favor, no utilice la Aplicación.
          </p>
        )}

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <p
            style={{
              fontSize: "20.5px",
              fontWeight: "bold",
              color: "black",
              textDecorationLine: "underline",
              textAlign: "center",
            }}
          >
            2. Propiedad intelectual
          </p>
          {secondOpened ? (
            <RemoveCircleOutlineIcon
              style={{
                alignSelf: "center",
                marginLeft: "2%",
                fontSize: "30px",
                cursor: "pointer",
              }}
              onClick={() => setSecondOpened(false)}
            />
          ) : (
            <ControlPointIcon
              style={{
                alignSelf: "center",
                marginLeft: "2%",
                fontSize: "30px",
                cursor: "pointer",
              }}
              onClick={() => setSecondOpened(true)}
            />
          )}
        </div>
        {!secondOpened ? (
          <p
            style={{ fontSize: "14.5px", color: "#636363", marginTop: "-0.5%" }}
          >
            La Aplicación y todos los contenidos y servicios asociados a ella
            son propiedad de sus titulares. Queda expresamente prohibida
            cualquier reproducción, distribución, modificación, transformación,
            cesión...
          </p>
        ) : (
          <p style={{ fontSize: "16px", color: "black", marginTop: "-0.5%" }}>
            La Aplicación y todos los contenidos y servicios asociados a ella
            son propiedad de sus titulares. Queda expresamente prohibida
            cualquier reproducción, distribución, modificación, transformación,
            cesión, puesta a disposición, comunicación pública y cualquier otro
            acto de explotación total o parcial de los contenidos y servicios
            sin la autorización previa y por escrito de los titulares
            correspondientes.
          </p>
        )}

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <p
            style={{
              fontSize: "20.5px",
              fontWeight: "bold",
              color: "black",
              textDecorationLine: "underline",
              textAlign: "center",
            }}
          >
            3. Responsabilidad del Usuario
          </p>
          {thirdOpened ? (
            <RemoveCircleOutlineIcon
              style={{
                alignSelf: "center",
                marginLeft: "2%",
                fontSize: "30px",
                cursor: "pointer",
              }}
              onClick={() => setThirdOpened(false)}
            />
          ) : (
            <ControlPointIcon
              style={{
                alignSelf: "center",
                marginLeft: "2%",
                fontSize: "30px",
                cursor: "pointer",
              }}
              onClick={() => setThirdOpened(true)}
            />
          )}
        </div>
        {!thirdOpened ? (
          <p
            style={{ fontSize: "14.5px", color: "#636363", marginTop: "-0.5%" }}
          >
            El Usuario se compromete a utilizar la Aplicación de conformidad con
            la ley, la moral, el orden público y los presentes Términos. El
            Usuario será responsable de cualquier...
          </p>
        ) : (
          <p style={{ fontSize: "16px", color: "black", marginTop: "-0.5%" }}>
            El Usuario se compromete a utilizar la Aplicación de conformidad con
            la ley, la moral, el orden público y los presentes Términos. El
            Usuario será responsable de cualquier daño o perjuicio que pudiera
            causar a terceros o a la propia Aplicación como consecuencia de la
            infracción de estos Términos o de la normativa aplicable.
          </p>
        )}

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <p
            style={{
              fontSize: "20.5px",
              fontWeight: "bold",
              color: "black",
              textDecorationLine: "underline",
              textAlign: "center",
            }}
          >
            4. Responsabilidad de la empresa
          </p>
          {fourOpened ? (
            <RemoveCircleOutlineIcon
              style={{
                alignSelf: "center",
                marginLeft: "2%",
                fontSize: "30px",
                cursor: "pointer",
              }}
              onClick={() => setFourOpened(false)}
            />
          ) : (
            <ControlPointIcon
              style={{
                alignSelf: "center",
                marginLeft: "2%",
                fontSize: "30px",
                cursor: "pointer",
              }}
              onClick={() => setFourOpened(true)}
            />
          )}
        </div>
        {!fourOpened ? (
          <p
            style={{ fontSize: "14.5px", color: "#636363", marginTop: "-0.5%" }}
          >
            La empresa no se responsabiliza de los daños o perjuicios que
            pudieran derivarse del acceso, uso o mal uso de la Aplicación, así
            como de los contenidos y servicios...
          </p>
        ) : (
          <p style={{ fontSize: "16px", color: "black", marginTop: "-0.5%" }}>
            La empresa no se responsabiliza de los daños o perjuicios que
            pudieran derivarse del acceso, uso o mal uso de la Aplicación, así
            como de los contenidos y servicios asociados a ella, salvo que
            dichos daños o perjuicios sean imputables a una actuación dolosa o
            negligente por parte de la empresa.
          </p>
        )}

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <p
            style={{
              fontSize: "20.5px",
              fontWeight: "bold",
              color: "black",
              textDecorationLine: "underline",
              textAlign: "center",
            }}
          >
            5. Modificaciones y actualizaciones
          </p>
          {fiveOpened ? (
            <RemoveCircleOutlineIcon
              style={{
                alignSelf: "center",
                marginLeft: "2%",
                fontSize: "30px",
                cursor: "pointer",
              }}
              onClick={() => setFiveOpened(false)}
            />
          ) : (
            <ControlPointIcon
              style={{
                alignSelf: "center",
                marginLeft: "2%",
                fontSize: "30px",
                cursor: "pointer",
              }}
              onClick={() => setFiveOpened(true)}
            />
          )}
        </div>
        {!fiveOpened ? (
          <p
            style={{ fontSize: "14.5px", color: "#636363", marginTop: "-0.5%" }}
          >
            La empresa se reserva el derecho a modificar en cualquier momento y
            sin necesidad de previo aviso los contenidos y servicios ofrecidos a
            través de la Aplicación...
          </p>
        ) : (
          <p style={{ fontSize: "16px", color: "black", marginTop: "-0.5%" }}>
            La empresa se reserva el derecho a modificar en cualquier momento y
            sin necesidad de previo aviso los contenidos y servicios ofrecidos a
            través de la Aplicación, así como a cambiar, suprimir o añadir
            nuevos Términos. El Usuario estará sujeto a los Términos vigentes en
            el momento de su acceso o uso de la Aplicación.
          </p>
        )}

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <p
            style={{
              fontSize: "20.5px",
              fontWeight: "bold",
              color: "black",
              textDecorationLine: "underline",
              textAlign: "center",
            }}
          >
            6. Política de privacidad
          </p>
          {sixOpened ? (
            <RemoveCircleOutlineIcon
              style={{
                alignSelf: "center",
                marginLeft: "2%",
                fontSize: "30px",
                cursor: "pointer",
              }}
              onClick={() => setSixOpened(false)}
            />
          ) : (
            <ControlPointIcon
              style={{
                alignSelf: "center",
                marginLeft: "2%",
                fontSize: "30px",
                cursor: "pointer",
              }}
              onClick={() => setSixOpened(true)}
            />
          )}
        </div>
        {!sixOpened ? (
          <p
            style={{ fontSize: "14.5px", color: "#636363", marginTop: "-0.5%" }}
          >
            La empresa garantiza la protección de los datos personales
            proporcionados por el Usuario en el marco del acceso y uso...
          </p>
        ) : (
          <p style={{ fontSize: "16px", color: "black", marginTop: "-0.5%" }}>
            La empresa garantiza la protección de los datos personales
            proporcionados por el Usuario en el marco del acceso y uso de la
            Aplicación, de conformidad con lo establecido en nuestra política de
            privacidad.
          </p>
        )}

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <p
            style={{
              fontSize: "20.5px",
              fontWeight: "bold",
              color: "black",
              textDecorationLine: "underline",
              textAlign: "center",
            }}
          >
            7. Legislación y jurisdicción
          </p>
          {sevenOpened ? (
            <RemoveCircleOutlineIcon
              style={{
                alignSelf: "center",
                marginLeft: "2%",
                fontSize: "30px",
                cursor: "pointer",
              }}
              onClick={() => setSevenOpened(false)}
            />
          ) : (
            <ControlPointIcon
              style={{
                alignSelf: "center",
                marginLeft: "2%",
                fontSize: "30px",
                cursor: "pointer",
              }}
              onClick={() => setSevenOpened(true)}
            />
          )}
        </div>
        {!sevenOpened ? (
          <p
            style={{ fontSize: "14.5px", color: "#636363", marginTop: "-0.5%" }}
          >
            Los presentes Términos se regirán e interpretarán de acuerdo con la
            legislación española. Para cualquier controversia que pudiera
            derivarse del acceso o uso...
          </p>
        ) : (
          <p style={{ fontSize: "16px", color: "black", marginTop: "-0.5%" }}>
            Los presentes Términos se regirán e interpretarán de acuerdo con la
            legislación española. Para cualquier controversia que pudiera
            derivarse del acceso o uso de la Aplicación, las partes se someten a
            los juzgados y tribunales de la ciudad de Murcia.
          </p>
        )}
      </div>
    </div>
  );
};

export default LegalData;
