public class Main {

    public static void main(String[]args) {
        int[] array = {1, 5, 12};

        System.out.printf("Menor número faltando %.0f.", MenorNumeroFaltando(array));
    }

    @SuppressWarnings("unused")
    public static double MenorNumeroFaltando(int[] a){
        int n = 0;

        for (int i = a[0]; i < a[a.length-1]; i++) {
            for (int j = n; j < a.length; j++) {
                if(a[j] == i) break;
                else return i;
            }
            n++;
        }
        return a[a.length-1];
    }
}