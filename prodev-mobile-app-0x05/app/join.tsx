import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { styles } from "../styles/_join";
import { HEROLOGOGREEN, GOOGLELOGO, FACEBOOKLOGO } from "../constants";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

export default function Join() {
  return (
    <View style={styles.container}>
      <View style={styles.iconsection}>
        <Ionicons name="arrow-back" size={25} />
        <Image source={HEROLOGOGREEN} />
      </View>

      <View style={styles.titleTextGroup}>
        <Text style={styles.titleText}>Create your</Text>
        <Text style={styles.titleText}>Account</Text>
        <Text style={styles.subText}>Enter your details to sign up.</Text>
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.formLabel}>Email</Text>
        <TextInput style={styles.formControl} keyboardType="email-address" />

        <Text style={styles.formLabel}>Password</Text>
        <View style={styles.formPasswordControl}>
          <TextInput style={styles.passwordControl} secureTextEntry />
          <FontAwesome name="eye-slash" size={24} color="#7E7B7B" />
        </View>

        <Text style={styles.forgotPasswordText}>Forgot password?</Text>
      </View>

      <TouchableOpacity style={styles.primaryButton}>
        <Text style={styles.buttonText}>Join now</Text>
      </TouchableOpacity>

      <View style={styles.dividerGroup}>
        <View style={styles.divider} />
        <Text style={styles.dividerText}>OR</Text>
        <View style={styles.divider} />
      </View>

      <View style={styles.secondaryButtonGroup}>
        <TouchableOpacity style={styles.secondaryButton}>
          <Image source={GOOGLELOGO} />
          <Text style={styles.secondaryButtonText}>Continue with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.secondaryButton}>
          <Image source={FACEBOOKLOGO} />
          <Text style={styles.secondaryButtonText}>Continue with Facebook</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.signupgroup}>
        <Text style={styles.signupTitleText}>Already have an account?</Text>
        <Text style={styles.signupSubTitleText}>Sign in</Text>
      </View>
    </View>
  );
}
