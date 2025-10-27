```mermaid
flowchart LR
    %% Diagrama de Red del Proyecto SGE - Versión Final Optimizada
    %%
    %% Descripción:
    %% Este diagrama representa la red de actividades del proyecto, optimizado para
    %% eliminar nodos redundantes y unificar el punto final, respetando al 100%
    %% la tabla de precedencias original.
    %%
    %% Formato de Nodo: ID | EET | LET
    %% EET (Early Event Time): Tiempo más temprano del evento.
    %% LET (Late Event Time): Tiempo más tardío del evento.
    %% Nodos donde EET = LET son eventos críticos.

    %% --- Definición de Nodos ---
    N1(("1|0|0"))
    N2(("2|1|1"))
    N3(("3|2|12"))
    N4(("4|2|2"))
    N5(("5|2|12"))    %% Merge para E (desde B, C)
    N6(("6|4|4"))
    N7(("7|8|18"))
    N8(("8|14|14"))
    N9(("9|17|17"))
    N10(("10|18|18"))
    N11(("11|18|18"))  %% Merge para J (desde E, H)
    N12(("12|23|23"))
    N13(("13|15|28"))
    N14(("14|16|24"))
    N15(("15|23|23"))  %% Merge para L (desde F, J)
    N16(("16|24|24"))
    N17(("17|24|24"))  %% Merge para N (desde L, M)
    N18(("18|28|28"))
    N19(("19|23|27"))  %% Merge para O (desde G, J)
    N20(("20|25|29"))
    N21(("21|27|31"))
    N22(("22|28|28"))  %% Merge para S (desde I, N)
    N23(("23|35|35"))
    N24(("24|27|37"))  %% Merge para Q (desde I, P)
    N25(("25|38|38"))  %% Nodo Final Unificado

    %% --- Conexiones y Actividades ---
    N1 -- A (1) --> N2
    N1 -- B (2) --> N3
    N2 -- C (1) --> N4
    N3 -.-> N5
    N4 -- D (2) --> N6
    N4 -.-> N5
    N5 -- E (6) --> N7
    N6 -- F (10) --> N8
    N7 -.-> N11
    N8 -- G (3) --> N9
    N8 -- I (1) --> N13
    N8 -- M (2) --> N14
    N8 -.-> N15
    N9 -- H (1) --> N10
    N9 -.-> N19
    N10 -.-> N11
    N11 -- J (5) --> N12
    N12 -.-> N15
    N12 -.-> N19
    N13 -- K (2) --> N25
    N13 -.-> N22
    N13 -.-> N24
    N14 -.-> N17
    N15 -- L (1) --> N16
    N16 -.-> N17
    N17 -- N (4) --> N18
    N18 -.-> N22
    N19 -- O (2) --> N20
    N20 -- P (2) --> N21
    N21 -- R (7) --> N25
    N21 -.-> N24
    N24 -- Q (1) --> N25
    N22 -- S (7) --> N23
    N23 -- T (3) --> N25

    %% --- Resaltado de la Ruta Crítica ---
    %% Ruta: A-C-D-F-G-H-(d)-J-(d)-L-(d)-N-(d)-S-T
    linkStyle 0 stroke:red,stroke-width:2px  %% A
    linkStyle 2 stroke:red,stroke-width:2px  %% C
    linkStyle 4 stroke:red,stroke-width:2px  %% D
    linkStyle 7 stroke:red,stroke-width:2px  %% F
    linkStyle 9 stroke:red,stroke-width:2px  %% G
    linkStyle 13 stroke:red,stroke-width:2px %% H
    linkStyle 15 stroke:red,stroke-width:2px %% dummy H->J
    linkStyle 16 stroke:red,stroke-width:2px %% J
    linkStyle 17 stroke:red,stroke-width:2px %% dummy J->L
    linkStyle 24 stroke:red,stroke-width:2px %% L
    linkStyle 25 stroke:red,stroke-width:2px %% dummy L->N
    linkStyle 26 stroke:red,stroke-width:2px %% N
    linkStyle 27 stroke:red,stroke-width:2px %% dummy N->S
    linkStyle 32 stroke:red,stroke-width:2px %% S
    linkStyle 33 stroke:red,stroke-width:2px %% T
```
