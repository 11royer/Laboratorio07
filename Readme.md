# Principios SOLID

SOLID es un acrónimo que representa cinco principios de diseño orientado a objetos que ayudan a crear software más legible, mantenible y flexible. Estos principios son:

## 1. **Single Responsibility Principle (SRP)**
**Principio de Responsabilidad Única:**
Cada clase debe tener una única razón para cambiar, lo que significa que debe tener una sola responsabilidad o propósito.
- Romper grandes componentes dentro de unos más pequeños
- Extraer código no relacionado a la funcionalidad principal del componente, dentro de funciones separadas
- Encapsular información conectada dentro de custom hooks

**Ejemplo en TypeScript:**
Supongamos que tenemos una clase `Report` que maneja tanto la generación de reportes como su impresión.

```typescript
// Antes - Violando SRP
class User {
  constructor(private name: string, private email: string) {}

  getName(): string {
    return this.name;
  }

  setName(name: string): void {
    this.name = name;
  }

  sendEmail(message: string): void {
    // Lógica para enviar un correo electrónico
  }
}

// Después - Aplicando SRP
class User {
  constructor(private name: string, private email: string) {}

  getName(): string {
    return this.name;
  }

  setName(name: string): void {
    this.name = name;
  }
}

class EmailService {
  sendEmail(email: string, message: string): void {
    // Lógica para enviar un correo electrónico
  }
}
```
## 2. **Open/Closed Principle (OCP)**
**Principio de Abierto/Cerrado:**
Las entidades de software (clases, módulos, funciones, etc.) deben estar abiertas para extensión pero cerradas para modificación. Esto significa que deberías poder agregar nueva funcionalidad sin modificar el código existente.

**Ejemplo en TypeScript:**

```typescript
// Antes - Violando OCP
class Rectangle {
  constructor(public width: number, public height: number) {}
}

class AreaCalculator {
  calculate(rectangle: Rectangle): number {
    return rectangle.width * rectangle.height;
  }
}

// Después - Aplicando OCP
interface Shape {
  calculateArea(): number;
}

class Rectangle implements Shape {
  constructor(public width: number, public height: number) {}
  
  calculateArea(): number {
    return this.width * this.height;
  }
}

class Circle implements Shape {
  constructor(public radius: number) {}

  calculateArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class AreaCalculator {
  calculate(shape: Shape): number {
    return shape.calculateArea();
  }
}
```

## 3. **Liskov Substitution Principle (LSP)**
**Principio de Sustitución de Liskov:**

Los objetos de una clase derivada deben poder reemplazar a los objetos de la clase base sin alterar el funcionamiento del programa. En otras palabras, una subclase debe ser intercambiable con su clase base.

**Ejemplo en TypeScript:**
```typescript
// Antes - Violando LSP
class Bird {
  fly() {
    // Lógica para volar
  }
}

class Penguin extends Bird {
  fly() {
    throw new Error("Penguins can't fly!");
  }
}

// Después - Aplicando LSP
interface Flyable {
  fly(): void;
}

class Sparrow implements Flyable {
  fly() {
    // Lógica para volar
  }
}

class Penguin {
  // Los pingüinos no vuelan, así que no implementan Flyable
}
```

## 4. **Interface Segregation Principle (ISP)**
**Principio de Segregación de Interfaces:**

Una interfaz debe ser específica y no forzar a las clases a implementar métodos que no necesitan. Es mejor tener varias interfaces pequeñas en lugar de una interfaz grande.

**Ejemplo en TypeScript:**
```typescript
// Antes - Violando ISP
interface Worker {
  work(): void;
  eat(): void;
}

class Human implements Worker {
  work() {
    // Lógica de trabajo
  }

  eat() {
    // Lógica de comer
  }
}

// Después - Aplicando ISP
interface Workable {
  work(): void;
}

interface Eatable {
  eat(): void;
}

class Human implements Workable, Eatable {
  work() {
    // Lógica de trabajo
  }

  eat() {
    // Lógica de comer
  }
}
```

## 5. **Dependency Inversion Principle (DIP)**
**Principio de Inversión de Dependencias:**

Las dependencias deben ser invertidas: los módulos de alto nivel no deben depender de módulos de bajo nivel, sino que ambos deben depender de abstracciones. Además, las abstracciones no deben depender de detalles, los detalles deben depender de abstracciones.

**Ejemplo en TypeScript:**
```typescript
// Antes - Violando DIP
class LightBulb {
  turnOn() {}
  turnOff() {}
}

class Switch {
  private bulb: LightBulb;

  constructor(bulb: LightBulb) {
    this.bulb = bulb;
  }

  operate() {
    // Lógica para operar el interruptor
  }
}

// Después - Aplicando DIP
interface Switchable {
  turnOn(): void;
  turnOff(): void;
}

class LightBulb implements Switchable {
  turnOn() {}
  turnOff() {}
}

class Switch {
  private switchable: Switchable;

  constructor(switchable: Switchable) {
    this.switchable = switchable;
  }

  operate() {
    // Lógica para operar el interruptor
  }
}
```
### Conclusión
Estos principios ayudan a mejorar la modularidad y la mantenibilidad del código, facilitando la expansión y la modificación del software sin introducir errores.