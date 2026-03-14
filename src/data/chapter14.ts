export const chapter14Content = `
# Chapter 14: NMR Spectroscopy

## 14.1 Introduction to NMR Spectroscopy

**Nuclear Magnetic Resonance (NMR) spectroscopy** is used to determine the carbon–hydrogen framework of a molecule. It identifies the environments of specific nuclei (like $^1H$ and $^{13}C$).
*   Nuclei with an odd mass number or odd atomic number have a **magnetic moment** (spin).
*   In an external magnetic field ($B_0$), these nuclei align with or against the field.

## 14.2 Fourier Transform NMR Spectrometers

Modern NMR spectrometers use a short pulse of radiofrequency (RF) radiation to excite all nuclei simultaneously. The resulting signal is converted into a spectrum using a **Fourier Transform (FT)**.

## 14.3 Shielding Causes Different Nuclei to Show Signals at Different Frequencies

Electrons around a nucleus create a local magnetic field that opposes the external field. This is called **shielding**.
*   **Shielded nuclei:** Experience a weaker magnetic field and show signals at lower frequencies (**upfield**).
*   **Deshielded nuclei:** Experience a stronger magnetic field and show signals at higher frequencies (**downfield**).

## 14.4 The Number of Signals in the 1H NMR Spectrum

The number of signals corresponds to the number of sets of **chemically equivalent protons** in the molecule.

## 14.5 The Chemical Shift

The **chemical shift ($\delta$)** is the position of a signal relative to a reference compound (usually tetramethylsilane, **TMS**, $\delta = 0$). It is measured in parts per million (ppm).

## 14.6 The Relative Positions of 1H NMR Signals

Electronegative atoms (like O, N, X) deshield nearby protons, shifting their signals downfield.

## 14.7 Characteristic Values of Chemical Shifts

*   Methyl protons ($CH_3$): ~0.9 ppm.
*   Methylene protons ($CH_2$): ~1.3 ppm.
*   Protons on a carbon bonded to an oxygen: 3.3–4.5 ppm.
*   Aromatic protons: 6.5–8.0 ppm.
*   Aldehyde protons: 9.0–10.0 ppm.

## 14.8 Integration of the Signals

The area under an NMR signal (**integration**) is proportional to the number of protons giving rise to that signal.

## 14.9 Diamagnetic Anisotropy

The $\pi$ electrons in benzene and other unsaturated systems create a local magnetic field that deshields nearby protons, shifting them significantly downfield.

## 14.10 Splitting of the Signals

Signals are often split into multiple peaks due to **spin-spin coupling** with neighboring protons.
*   **n + 1 Rule:** A signal for a proton with $n$ equivalent neighboring protons is split into $n + 1$ peaks.
    *   0 neighbors: Singlet.
    *   1 neighbor: Doublet.
    *   2 neighbors: Triplet.
    *   3 neighbors: Quartet.

## 14.11 More Examples of 1H NMR Spectra

Analysis of complex spectra involves identifying the number of signals, their chemical shifts, integrations, and splitting patterns.

## 14.12 Coupling Constants

The distance between peaks in a multiplet is the **coupling constant ($J$)**, measured in Hz. Protons that couple with each other have the same $J$ value.

## 14.13 Splitting Diagrams

Splitting diagrams (tree diagrams) are used to explain complex splitting patterns when a proton is coupled to non-equivalent neighbors.

## 14.14 The Time Scale of NMR Spectroscopy

NMR is a relatively slow technique. Processes that occur faster than the NMR time scale (like cyclohexane ring flipping) appear as an average signal.

## 14.15 13C NMR Spectroscopy

$^{13}C$ NMR identifies the number and types of carbons in a molecule.
*   Signals are typically singlets (due to decoupling).
*   Chemical shifts range from 0 to 220 ppm.

## 14.16 DEPT 13C NMR Spectra

**DEPT** (Distortionless Enhancement by Polarization Transfer) is a technique used to distinguish between $CH_3$, $CH_2$, $CH$, and quaternary carbons.

## 14.17 Two-Dimensional NMR Spectroscopy

**2D NMR** (like COSY and HETCOR) shows correlations between nuclei, helping to determine how atoms are connected.

## 14.18 Magnetic Resonance Imaging (MRI)

MRI is a medical application of NMR that uses the relaxation times of water protons in different tissues to create detailed images of the body.

### Summary

*   $^1H$ NMR: Number of signals (sets of protons), chemical shift (environment), integration (number of protons), splitting (neighboring protons).
*   $^{13}C$ NMR: Number of signals (sets of carbons), chemical shift (environment).
*   Splitting follows the n+1 rule for equivalent neighbors.
*   Electronegative groups shift signals downfield.

### Essential Concepts

1.  **Chemical Shift:** The position of a signal in ppm.
2.  **Spin-Spin Coupling:** Interaction between the magnetic moments of neighboring nuclei.
3.  **Equivalent Protons:** Protons in the same chemical environment.
4.  **TMS:** Tetramethylsilane, the standard reference for NMR.
5.  **Multiplet:** A signal split into more than four peaks.
`;
