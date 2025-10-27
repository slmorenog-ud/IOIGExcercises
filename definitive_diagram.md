```mermaid
flowchart LR
    %% Diagrama de Red del Proyecto SGE - Versión Definitiva
    %%
    %% Descripción:
    %% Esta es la versión final y más optimizada de la red del proyecto.
    %% La estructura respeta al 100% la tabla de precedencias original,
    %% eliminando todos los nodos "dummy" y de fusión posibles para
    %% una máxima claridad.
    %%
    %% Formato de Nodo: ID | EET | LET
    %% EET (Early Event Time): Tiempo más temprano del evento.
    %% LET (Late Event Time): Tiempo más tardío del evento.

    %% --- Definición de Nodos ---
    N1(("1|0|0"))      %% Inicio
    N2(("2|1|1"))      %% Fin A
    N3(("3|2|12"))     %% Fin B
    N4(("4|2|2"))      %% Fin C
    N5(("5|2|12"))     %% Merge para E
    N6(("6|4|4"))      %% Fin D
    N7(("7|8|18"))     %% Fin E
    N8(("8|14|14"))    %% Fin F
    N9(("9|17|17"))    %% Fin G
    N10(("10|18|18"))   %% Fin H, Merge para J
    N11(("11|15|28"))   %% Fin I
    N12(("12|16|24"))   %% Fin M
    N13(("13|23|23"))   %% Fin J, Merge para L y O
    N14(("14|24|24"))   %% Fin L, Merge para N
    N15(("15|25|29"))   %% Fin O
    N16(("16|27|31"))   %% Fin P
    N17(("17|28|28"))   %% Fin N, Merge para S
    N18(("18|27|37"))   %% Merge para Q
    N19(("19|34|38"))   %% Fin R
    N20(("20|35|35"))   %% Fin S
    N21(("21|17|38"))   %% Fin K
    N22(("22|28|38"))   %% Fin Q
    N23(("23|38|38"))   %% Fin T, Nodo Final Unificado

    %% --- Conexiones y Actividades ---
    N1 -- A (1) --> N2
    N1 -- B (2) --> N3
    N2 -- C (1) --> N4
    N3 -.-> N5
    N4 -.-> N5
    N4 -- D (2) --> N6
    N5 -- E (6) --> N7
    N6 -- F (10) --> N8
    N7 -.-> N10
    N8 -- G (3) --> N9
    N8 -- I (1) --> N11
    N8 -- M (2) --> N12
    N8 -.-> N13
    N9 -- H (1) --> N10
    N9 -.-> N13
    N10 -- J (5) --> N13
    N11 -- K (2) --> N21
    N11 -.-> N17
    N11 -.-> N18
    N12 -.-> N14
    N13 -- L (1) --> N14
    N13 -- O (2) --> N15
    N14 -- N (4) --> N17
    N15 -- P (2) --> N16
    N16 -- R (7) --> N19
    N16 -.-> N18
    N17 -- S (7) --> N20
    N18 -- Q (1) --> N22
    N19 -.-> N23
    N20 -- T (3) --> N23
    N21 -.-> N23
    N22 -.-> N23

    %% --- Resaltado de la Ruta Crítica ---
    %% Ruta: A-C-D-F-G-H-J-L-N-S-T
    linkStyle 0 stroke:red,stroke-width:2px  %% A
    linkStyle 2 stroke:red,stroke-width:2px  %% C
    linkStyle 5 stroke:red,stroke-width:2px  %% D
    linkStyle 7 stroke:red,stroke-width:2px  %% F
    linkStyle 9 stroke:red,stroke-width:2px  %% G
    linkStyle 13 stroke:red,stroke-width:2px %% H
    linkStyle 15 stroke:red,stroke-width:2px %% J
    linkStyle 21 stroke:red,stroke-width:2px %% L
    linkStyle 23 stroke:red,stroke-width:2px %% N
    linkStyle 27 stroke:red,stroke-width:2px %% S
    linkStyle 30 stroke:red,stroke-width:2px %% T
```
