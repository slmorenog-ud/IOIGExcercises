```mermaid
flowchart LR
    %% Diagrama de Red del Proyecto SGE - Versión Optimizada
    %%
    %% Descripción:
    %% Este diagrama representa la red de actividades del proyecto de implementación de un SGE.
    %% Ha sido optimizado para eliminar nodos y flechas dummy redundantes.
    %%
    %% Formato de Nodo: ID | EET | LET
    %% EET (Early Event Time): Tiempo más temprano en que puede ocurrir el evento (nodo).
    %% LET (Late Event Time): Tiempo más tardío en que puede ocurrir el evento sin retrasar el proyecto.

    %% --- Definición de Nodos ---
    N1(("1|0|0"))
    N2(("2|1|1"))
    N3(("3|2|12"))
    N4(("4|2|2"))
    N5(("5|4|4"))
    N6(("6|2|12"))
    N7(("7|8|18"))
    N8(("8|14|14"))
    N9(("9|17|17"))
    N10(("10|18|18"))
    N11(("11|15|28"))
    N12(("12|18|18"))
    N13(("13|23|23"))
    N14(("14|17|38"))
    N15(("15|23|23"))
    N18(("18|24|24"))
    N19(("19|28|28"))
    N20(("20|23|27"))
    N21(("21|25|29"))
    N22(("22|27|31"))
    N23(("23|27|37"))
    N24(("24|28|38"))
    N25(("25|34|38"))
    N26(("26|28|28"))
    N27(("27|35|35"))
    N28(("28|38|38"))
    N29(("29|38|38"))

    %% --- Conexiones y Actividades ---
    N1 -- A (1) --> N2
    N1 -- B (2) --> N3
    N2 -- C (1) --> N4
    N3 -.-> N6
    N4 -- D (2) --> N5
    N4 -.-> N6
    N5 -- F (10) --> N8
    N6 -- E (6) --> N7
    N7 -.-> N12
    N8 -- G (3) --> N9
    N8 -- I (1) --> N11
    N8 -- M (2) --> N18  %% Simplificado
    N8 -.-> N15
    N9 -- H (1) --> N10
    N9 -.-> N20
    N10 -.-> N12
    N11 -- K (2) --> N14
    N11 -.-> N23
    N11 -.-> N26
    N12 -- J (5) --> N13
    N13 -.-> N15
    N13 -.-> N20
    N14 -.-> N29
    N15 -- L (1) --> N18  %% Simplificado
    N18 -- N (4) --> N19
    N19 -.-> N26
    N20 -- O (2) --> N21
    N21 -- P (2) --> N22
    N22 -- R (7) --> N25
    N22 -.-> N23
    N23 -- Q (1) --> N24
    N24 -.-> N29
    N25 -.-> N29
    N26 -- S (7) --> N27
    N27 -- T (3) --> N28
    N28 -.-> N29

    %% --- Resaltado de la Ruta Crítica ---
    %% Ruta: A-C-D-F-G-H-(dummy)-J-(dummy)-L-N-(dummy)-S-T-(dummy)
    linkStyle 0 stroke:red,stroke-width:2px  %% A
    linkStyle 2 stroke:red,stroke-width:2px  %% C
    linkStyle 4 stroke:red,stroke-width:2px  %% D
    linkStyle 6 stroke:red,stroke-width:2px  %% F
    linkStyle 9 stroke:red,stroke-width:2px  %% G
    linkStyle 13 stroke:red,stroke-width:2px %% H
    linkStyle 15 stroke:red,stroke-width:2px %% Dummy H->J
    linkStyle 19 stroke:red,stroke-width:2px %% J
    linkStyle 20 stroke:red,stroke-width:2px %% Dummy J->L
    linkStyle 23 stroke:red,stroke-width:2px %% L
    linkStyle 24 stroke:red,stroke-width:2px %% N
    linkStyle 25 stroke:red,stroke-width:2px %% Dummy N->S
    linkStyle 33 stroke:red,stroke-width:2px %% S
    linkStyle 34 stroke:red,stroke-width:2px %% T
    linkStyle 35 stroke:red,stroke-width:2px %% Dummy T->FIN
```
